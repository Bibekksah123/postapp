import { useState } from "react"
import { Link } from "react-router-dom"
import { auth,provider } from "../firebase/Confi"
import { signInWithPopup,signOut } from "firebase/auth"
import { NavLink } from "react-router-dom"

function Header() {
  const [set, setset] = useState(JSON.parse(localStorage.getItem("set"))||false)

  function handlebtn(){
signInWithPopup(auth,provider).then((result)=>{
  console.log((result))
  setset(true)
  localStorage.setItem("set",JSON.stringify(true))
})
.catch((erro)=>{
  console.log(erro)
})
  }
  function logout(){
    signOut(auth)
    setset(false)
    localStorage.setItem("set",JSON.stringify(false))
  }
  return (
<header>
<Link className="logo" to="/"><img src="https://th.bing.com/th?id=OIP.CqjK-tAU0v2DvPtPgN8p1QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2" alt="Logo" />
<span>Post</span>
</Link>
<nav className="nav">
  <NavLink to="/" className="link" end>Home</NavLink>
  {set?(<><NavLink to="create">create</NavLink> <button onClick={logout} className="auth"><i className="bi bi-box-arrow-right"></i>logout</button></>):(<> <button onClick={handlebtn} className="auth"><i className="bi bi-google"></i>Login</button></>)}
</nav>
</header>

  )
}

export default Header