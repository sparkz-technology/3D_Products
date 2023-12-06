import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion'
import state from '../store'
import { CustomButton } from '../components'

const Home: React.FC = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('up')}>
            <img
              src='./threejs.png'
              alt='logo'
              className='w-8 h-8 object-contain'
            />
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                LET'S <br className='xl:block hidden' />
                DESIGN IT
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className='flex flex-col gap-5'
            >
              <p className='max-w-md font-normal text-gray-600 text-base'>
                Create your own design with your own style.{' '}
                <strong>Design It</strong> is a platform for you to create your
                own design. You can create your own design with your own style
                and you can also share your design with others.
              </p>
              <CustomButton
                type='filled'
                title='Customize It'
                handleClick={() => (state.intro = false)}
                customStyle='w-fit px-4 py-2.5 font-bold text-sm'
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home
