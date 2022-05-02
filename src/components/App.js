import Navbar from './Navbar'
import PaintingDetails from './PaintingDetails'
import Gallery from './Gallery'
import About from './About'
import { useContext } from "react"
import PainterContext from "../context/PainterContext"

function App() {  
  const {currentPainting} = useContext(PainterContext)

  return (
    <div id="App" className="App">
      <Navbar />
      <About />
      {currentPainting && <PaintingDetails />}
      <Gallery />
    </div>
  );
}

export default App;
