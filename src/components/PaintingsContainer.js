import PaintingCard from './PaintingCard'
import { useContext } from "react"
import PainterContext from "../context/PainterContext"

function PaintingsContainer(){
  const {paintings, searchTerm, setCurrentPainting} = useContext(PainterContext)

  function filteredPaintings(){
    return paintings.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  return(
    <div className="ui centered cards">
    {
      filteredPaintings().map(painting => <PaintingCard
        key={painting.id}
        painting={painting}
        setCurrentPainting={setCurrentPainting}
      />)
    }
    </div>
  )
}

export default PaintingsContainer