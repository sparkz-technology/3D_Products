import { useSnapshot } from 'valtio'
import state from '../store'
import { AiFillCamera, AiOutlineArrowLeft } from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion'
import { slideAnimation } from '../config/motion'
import { models } from '../config/constants'
import ColorPicker from '../components/ColorPicker'
import { useState } from 'react'
import { colorPicker } from '../assets/image'

const Customizer: React.FC = () => {
  const snap = useSnapshot(state)
  const [showColorPicker, setShowColorPicker] = useState(false)
  const handleDownload = () => {
    const link = document.createElement('a')
    link.setAttribute('download', 'canvas.png')
    const canvas = document.querySelector('canvas')
    if (canvas) {
      link.setAttribute(
        'href',
        canvas
          .toDataURL('image/png')
          .replace('image/png', 'image/octet-stream'),
      )
      link.click()
    }
  }
  return (
    <>
      <AnimatePresence>
        {!snap.intro && (
          <>
            {showColorPicker && <ColorPicker />}
            //!
            <motion.div
              key='custom'
              className='absolute bottom-20 right-5 z-10 flex flex-col gap-2.5 overflow-x-auto 
              md:bottom-5   md:left-3  md:flex-row   '
              {...slideAnimation('down')}
            >
              {snap.colors.map((color) => (
                <motion.div
                  key={color}
                  className='w-10 h-10 rounded-full cursor-pointer border-3 border-black'
                  style={{ background: color }}
                  onClick={() => (state.color = color)}
                />
              ))}
              <motion.div
                className='w-10 h-10 rounded-full cursor-pointer'
                onClick={() => setShowColorPicker(!showColorPicker)}
              >
                <img
                  src={colorPicker}
                  className='rounded-full cursor-pointer'
                />
              </motion.div>
              {models.map((model) => (
                <motion.div
                  key={model.name}
                  className='w-10 h-10 rounded-full cursor-pointer border-3 border-black'
                  {...slideAnimation('up')}
                  style={{ color: snap.color, borderColor: snap.color }}
                  onClick={() =>
                    (state.currentModel =
                      state.currentModel === true ? false : true)
                  }
                >
                  <img
                    src={model.img}
                    alt={model.name}
                    className='w-full h-full object-contain'
                  />
                </motion.div>
              ))}
            </motion.div>
            //!
            <motion.div
              className='absolute z-10 bottom-5 right-5 flex items-center gap-2.5  px-4 py-2.5 font-bold text-sm
              p-2.5 rounded-md cursor-pointer border-2
              '
              {...slideAnimation('down')}
              style={{ color: snap.color, borderColor: snap.color }}
              onClick={handleDownload}
            >
              DOWNLOAD
              <AiFillCamera size='1.3em' />
            </motion.div>
            <motion.div
              className='absolute z-10 top-5 right-5 flex items-center gap-2.5  px-4 py-2.5 font-bold text-sm
              p-2.5 rounded-md cursor-pointer border-2
              '
              {...slideAnimation('up')}
              style={{ color: snap.color, borderColor: snap.color }}
              onClick={() => (state.intro = true)}
            >
              GO BACK
              <AiOutlineArrowLeft size='1.3em' />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Customizer
