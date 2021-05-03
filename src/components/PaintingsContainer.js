import PaintingCard from './PaintingCard'

function PaintingsContainer(props){
  const {paintings, searchTerm, setCurrentPainting} = props

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