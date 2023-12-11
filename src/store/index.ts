import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  color: '#726DE8',
  decal: 'three2',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './Threejs.png',
  fullDecal: './Threejs.png',
  currentModel: true,
  colors: ['#ccc', '#726DE8', '#EF674E', '#353934'],
})

export default state
