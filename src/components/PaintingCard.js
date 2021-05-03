function Painting(props){
  const {painting, setCurrentPainting} = props

  return(
    <div className="ui card">
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