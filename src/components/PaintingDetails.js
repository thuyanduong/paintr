import { useContext } from "react"
import PainterContext from "../context/PainterContext"

function PaintingDetails(){
  const {currentPainting} = useContext(PainterContext)

  return (
    <>
      <h1>Painting Details</h1>
      <div className="ui segment">
        <div className="ui fluid card">
          <div>
            <img src={currentPainting.image} alt={currentPainting.title} />
            <h3>
              {currentPainting.title}
            </h3>
            <div>{`Artist: ${currentPainting.artist.name}`}</div>
            <div>{`Born: ${currentPainting.artist.birthday}`}</div>
            <div>{`Died: ${currentPainting.artist.deathday}`}</div>
            <div>{`Date: ${currentPainting.date}`}</div>
            <div>
              {`Dimensions: ${currentPainting.dimensions.width} in. x ${currentPainting.dimensions.height} in.`}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
  
  export default PaintingDetails
  