import {useContext} from 'react'
import PainterContext from '../context/PainterContext'

function Painting({painting}){
  const {setCurrentPainting} = useContext(PainterContext)

  return(
    <div className="ui centered card">
      <div>
        <img src={painting.image} alt={painting.title}/>
        <div>
          {painting.title}
        </div>
      </div>
      <button onClick={()=>{setCurrentPainting(painting)}}>More Info</button>
    </div>
  )
}

  export default Painting