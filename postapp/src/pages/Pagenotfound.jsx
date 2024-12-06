import React from 'react'
import { Link } from 'react-router-dom'
function Pagenotfound() {
  return (
    <div className="pageNotFound">
      <p>404 || pagenotfound</p>
     <Link to="/"> <button>Click here to go</button></Link>
    </div>
  )
}

export default Pagenotfound