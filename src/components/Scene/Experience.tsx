'use client'

import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { ErrorBear } from '../Experience/ErrorBear'
import * as THREE from 'three'

export const Experience = () => {
  const scroll = useScroll()
  const [activeSection, setActiveSection] = useState(0)
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const offset = scroll.offset
    const section = Math.floor(offset * 5)
    if (section !== activeSection) setActiveSection(section)

    if (groupRef.current) {
      // Parallax and movement based on scroll
      groupRef.current.position.y = offset * 10
    }
  })

  return (
    <group ref={groupRef}>
      {/* Hero Section: Glitch Heart Bear */}
      <group scale={1.2}>
        <ErrorBear 
          imagePath="/images/glitch_heart_bear.png" 
          position={[0, 0, 0]} 
          glitchLevel={0.8}
          active={activeSection === 0}
        />
      </group>

      {/* Section 2: Collection Overview */}
      <group position={[0, -5, 0]}>
        <ErrorBear 
          imagePath="/images/ctrl_alt_esc_bear.png" 
          position={[-2, 0, -2]} 
          glitchLevel={0.2}
          active={activeSection === 1}
        />
        <ErrorBear 
          imagePath="/images/alert_bear.png" 
          position={[2, 0, -2]} 
          glitchLevel={0.2}
          active={activeSection === 1}
        />
      </group>

      {/* Section 3: Detail - Ctrl Alt Esc Bear */}
      <group position={[0, -10, 0]} scale={1.1}>
        <ErrorBear 
          imagePath="/images/ctrl_alt_esc_bear.png" 
          position={[0, 0, 0]} 
          glitchLevel={0.4}
          active={activeSection === 2}
        />
      </group>

      {/* Section 4: Detail - Alert Bear */}
      <group position={[0, -15, 0]} scale={1.1}>
        <ErrorBear 
          imagePath="/images/alert_bear.png" 
          position={[0, 0, 0]} 
          glitchLevel={0.5}
          active={activeSection === 3}
        />
      </group>

      {/* Section 5: Gallery / Final State */}
      <group position={[0, -20, 0]}>
         <ErrorBear 
          imagePath="/images/glitch_heart_bear.png" 
          position={[0, 0, -1]} 
          glitchLevel={0.1}
          active={activeSection === 4}
        />
      </group>
    </group>
  )
}
