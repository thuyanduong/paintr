import {useContext} from 'react'
import Navbar from './Navbar'
import PaintingDetails from './PaintingDetails'
import Gallery from './Gallery'
import PainterContext from '../context/PainterContext'

function App() {
  const {currentPainting} = useContext(PainterContext)

  return (
    <div id="App" className="App">
      <Navbar />
      {currentPainting ? <PaintingDetails /> : null}
      <Gallery/>
    </div>
  );
}

export default App;
