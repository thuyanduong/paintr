import {useState, useEffect} from 'react'
import Navbar from './Navbar'
import PaintingDetails from './PaintingDetails'
import Gallery from './Gallery'

function App() {
  const [currentPainting, setCurrentPainting] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [paintings, setPaintings] = useState([])

  useEffect(()=>{
      fetch("http://localhost:4000/paintings")
      .then(res => res.json())
      .then(paintings => {
          setPaintings(paintings)
      })
  }, [])
  
  return (
    <div id="App" className="App">
      <Navbar />
      {currentPainting ? <PaintingDetails currentPainting={currentPainting}/> : null}
      <Gallery 
        searchTerm={searchTerm} 
        paintings={paintings} 
        setSearchTerm={setSearchTerm} 
        setCurrentPainting={setCurrentPainting}
      />
    </div>
  );
}

export default App;
