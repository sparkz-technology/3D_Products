import { useRef } from 'react'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'

const Backdrop: React.FC = () => {
  const shadows = useRef(null)
  // give the shadows a little bit of movement

  return (
    <AccumulativeShadows
      ref={shadows as any}
      temporal
      frames={40}
      alphaTest={0.85}
      scale={3}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        ambient={0.55}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop
