import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  color: '#EFBD48',
  decal: 'three2',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './Threejs.png',
  fullDecal: './Threejs.png',
  currentModel: true,
  colors: [
    '#ccc',
    '#EFBD4E',
    '#80C670',
    '#726DE8',
    '#EF674E',
    '#353934',
    '#FF2171',
  ],
})

export default state
