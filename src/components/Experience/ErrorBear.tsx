'use client'

import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float uTime;
  uniform float uDistortion;

  void main() {
    vUv = uv;
    vPosition = position;
    
    vec3 pos = position;
    
    // Subtle float animation
    pos.y += sin(uTime * 0.5 + position.x * 2.0) * 0.05;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform float uGlitch;
  uniform float uOpacity;

  // Simple noise function
  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  void main() {
    vec2 uv = vUv;
    
    // Horizontal glitch
    if (uGlitch > 0.0) {
      float g = noise(vec2(floor(uv.y * 50.0), uTime));
      if (g < uGlitch * 0.2) {
        uv.x += (noise(vec2(uTime * 2.0, uv.y)) - 0.5) * 0.15 * uGlitch;
      }
    }

    vec4 color = texture2D(uTexture, uv);
    
    // Chromatic aberration on glitch
    if (uGlitch > 0.2) {
      float offset = uGlitch * 0.03;
      float r = texture2D(uTexture, uv + vec2(offset, 0.0)).r;
      float b = texture2D(uTexture, uv - vec2(offset, 0.0)).b;
      color = vec4(r, color.g, b, color.a);
    }

    // Metallic Shine Simulation (Fake Reflection)
    float shine = step(0.9, sin(uv.x * 2.0 + uv.y * 1.5 + uTime * 0.5)) * 0.1;
    color.rgb += shine;

    // Digital scanline effect
    float scanline = sin(uv.y * 300.0 + uTime * 5.0) * 0.05 * uGlitch;
    color.rgb += scanline;

    // Fade edges
    float edge = smoothstep(0.0, 0.1, uv.x) * smoothstep(1.0, 0.9, uv.x) * 
                 smoothstep(0.0, 0.1, uv.y) * smoothstep(1.0, 0.9, uv.y);

    gl_FragColor = vec4(color.rgb, color.a * uOpacity * edge);
  }
`

interface ErrorBearProps {
  imagePath: string;
  position: [number, number, number];
  glitchLevel?: number;
  active?: boolean;
}

export const ErrorBear = ({ imagePath, position, glitchLevel = 0, active = false }: ErrorBearProps) => {
  const mesh = useRef<THREE.Mesh>(null)
  const texture = useTexture(imagePath)
  const { viewport } = useThree()
  
  // Responsive scale: make sure the bear fits in the viewport width
  const responsiveScale = Math.min(viewport.width / 4, 1)
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uTexture: { value: texture },
    uGlitch: { value: glitchLevel },
    uDistortion: { value: 0 },
    uOpacity: { value: 0 },
  }), [texture, glitchLevel])

  useFrame((state) => {
    if (mesh.current) {
      const material = mesh.current.material as THREE.ShaderMaterial
      material.uniforms.uTime.value = state.clock.elapsedTime
      
      // Smoothly animate opacity and glitch based on activity
      const targetOpacity = active ? 1 : 0.2
      material.uniforms.uOpacity.value = THREE.MathUtils.lerp(material.uniforms.uOpacity.value, targetOpacity, 0.1)
      
      const targetGlitch = active ? (glitchLevel + Math.sin(state.clock.elapsedTime * 10.0) * 0.1) : 0
      material.uniforms.uGlitch.value = THREE.MathUtils.lerp(material.uniforms.uGlitch.value, targetGlitch, 0.05)
      
      // Gentle rotation
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <mesh ref={mesh} position={position} scale={responsiveScale}>
      <planeGeometry args={[3, 3, 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
