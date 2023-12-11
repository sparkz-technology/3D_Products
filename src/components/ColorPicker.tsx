import state from '../store'
import { useSnapshot } from 'valtio'
import { SketchPicker } from 'react-color'

const ColorPicker: React.FC = () => {
  const snap = useSnapshot(state)

  return (
    <div
      className='absolute w-10 h-10 rounded-full left-0 top-0
     cursor-pointer border-3 border-black'
    >
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  )
}

export default ColorPicker
