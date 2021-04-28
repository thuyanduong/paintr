function NavBar(){
    return(
      <div className="ui inverted blue menu navbar">
       <a className="item">
         <h2 className="ui header">
           <i className="paintbrush icon"></i>
           <div className="content">Paintr</div>
           <div className="sub header">Beautiful Paintings</div>
         </h2>
       </a>
       <a className="item">About</a>
       <a className="item">Gallery</a>
     </div>
    )
}

export default NavBar
