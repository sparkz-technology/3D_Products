import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './Threejs.png',
  fullDecal: './Threejs.png',
})

export default state
