import { db } from "../firebase/Confi";
import { doc,deleteDoc } from "firebase/firestore";

import { auth } from "../firebase/Confi";

function PostCart({post,settoggle,toggle}) {
  const {title, description,authors,id} = post;
  const set=JSON.parse(localStorage.getItem("set")||false)
  function handledel(){
const document=doc(db,"posts",id)
deleteDoc(document)
settoggle(!toggle)
  }

  return (
    <div className="card">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <p className="control">
            <span className="author">{authors.author}</span>
            {set && (authors.id===auth.currentUser.uid) && <span className="delete"><i  onClick={handledel} className="bi bi-trash3"></i></span>}
           
        </p>
    </div>
  )
}

export default PostCart