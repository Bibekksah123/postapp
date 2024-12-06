
import { NavLink } from "react-router-dom"
function Restrict({children}) {
  const set=JSON.parse(localStorage.getItem("set")||false)
  console.log(set)
  return set?children:<NavLink to="/"></NavLink>
}

export default Restrict