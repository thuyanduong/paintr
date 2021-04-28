import {useState} from 'react'
import Navbar from './Navbar'
import PaintingDetails from './PaintingDetails'
import Gallery from './Gallery'

function App() {
  const [paintings, setPaintings] = useState([])
  const [currentPainting, setCurrentPainting] = useState(null)

  return (
    <div className="App">
      <Navbar />
      {currentPainting ? <PaintingDetails /> : null}
      <Gallery paintingsList={paintings}/>
    </div>
  );
}

export default App;
