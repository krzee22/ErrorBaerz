'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Experience } from './Experience'
import { Environment, Preload, ScrollControls } from '@react-three/drei'
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing'

export const Scene = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 35 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <ScrollControls pages={5} damping={0.3}>
          <Experience />
        </ScrollControls>
        
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0.8} mipmapBlur intensity={0.5} radius={0.4} />
          <Noise opacity={0.05} />
        </EffectComposer>

        <Environment preset="city" />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
