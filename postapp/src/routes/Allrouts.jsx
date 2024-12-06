import Home from "../pages/Home"
import CreatePost from "../pages/CreatePost"
import Pagenotfound from "../pages/Pagenotfound"
import { Route,Routes } from "react-router-dom"
import Restrict from "./Restrict"
function Allrouts() {
  return (
   <main>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="create" element={<Restrict><CreatePost/></Restrict>}/>
  <Route path="*" element={<Pagenotfound/>}/>

</Routes>
   </main>
  )
}

export default Allrouts