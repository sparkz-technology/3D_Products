import CanvasModal from './canvas/CanvasModal'
import Customizer from './pages/Customizer'
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <main className='app transition-all ease-in'>
      <Home />
      <CanvasModal />
      <Customizer />
    </main>
  )
}

export default App
