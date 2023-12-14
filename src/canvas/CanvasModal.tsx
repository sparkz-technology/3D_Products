import { Canvas } from '@react-three/fiber'
import ShirtBaked from '../scene/ShirtBaked'
import ShirtFormal from '../scene/ShirtFormal'
import CameraRig from './CameraRig'
import Backdrop from './Backdrop'
import { Center, Environment } from '@react-three/drei'

const CanvasModal: React.FC = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }} // fov: 25 is the default value for the camera in the scene
      gl={{ preserveDrawingBuffer: true }} // for taking screenshots with gl.readPixels (see src/utils/screenshot.ts)
      className='w-full max-w-full h-full transition-all ease-in'
    >
      <ambientLight intensity={0.5} />
      <Environment preset='city' />
      <CameraRig>
        <Backdrop />
        <Center>
          <ShirtFormal />
        </Center>
        <Center>
          <ShirtBaked />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModal
