import Canvas from './canvas/Canvas'
import Customizer from './pages/Customizer'
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <main className='app transition-all ease-in'>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
