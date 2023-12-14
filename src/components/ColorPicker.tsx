import state from '../store'
import { useSnapshot } from 'valtio'
import { SketchPicker } from 'react-color'
import { useEffect, useRef } from 'react'

const ColorPicker: React.FC = () => {
  const snap = useSnapshot(state)
  const ref = useRef<HTMLDivElement>(null)
  const handler = () => (state.colorPickerOpen = false)
  const listenCapturing = true
  useEffect(
    function () {
      function handleClick(e: MouseEvent) {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          handler()
        }
      }

      document.addEventListener('click', handleClick, listenCapturing)

      return () =>
        document.removeEventListener('click', handleClick, listenCapturing)
    },
    [handler, listenCapturing],
  )
  return (
    <div
      ref={ref}
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
