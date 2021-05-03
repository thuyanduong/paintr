function Searchbar(props){
  const {searchTerm, setSearchTerm} = props

  return (
    <div className="ui large icon input">
      <input type="text" placeholder="Search..." value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
    </div>
  )
}

export default Searchbar