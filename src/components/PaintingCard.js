function Painting({painting}){
    return(
      <div className="ui card">
        <div>
          <img src={painting.image} alt={painting.title}/>
          <div>
            {painting.title}
          </div>
        </div>
        <button>More Info</button>
      </div>
    )
  }
  
  export default Painting