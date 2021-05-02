function NavBar(){
  return(
    <div className="ui inverted blue menu navbar">
      <a href="#App" className="item">
        <h2 className="ui header">
          <i className="paint brush icon"></i>
          <div className="content">Paintr</div>
          <div className="sub header">Beautiful Paintings</div>
        </h2>
      </a>
      <a href="#App" className="item">About</a>
      <a href="#App" className="item">Gallery</a>
    </div>
  )
}

export default NavBar
