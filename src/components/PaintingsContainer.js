import {useContext} from 'react'
import PainterContext from '../context/PainterContext'
import PaintingCard from './PaintingCard'

function PaintingsContainer(){
  const {paintings, searchTerm} = useContext(PainterContext)

  function filteredPaintings(){
    return paintings.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  return(
    <div className="ui cards">
    {
      filteredPaintings().map(painting => <PaintingCard
        key={painting.id}
        painting={painting}
      />)
    }
    </div>
  )
}

export default PaintingsContainer