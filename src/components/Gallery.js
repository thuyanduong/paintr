import Searchbar from './Searchbar'
import PaintingsContainer from './PaintingsContainer'

function Gallery(props){
  const {searchTerm, setSearchTerm, paintings, setCurrentPainting} = props
  
  return (
    <>
      <h1>Gallery</h1>
      <Searchbar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
      />
      <PaintingsContainer 
        searchTerm={searchTerm} 
        paintings={paintings} 
        setCurrentPainting={setCurrentPainting}
      />
    </>
  )
}

export default Gallery