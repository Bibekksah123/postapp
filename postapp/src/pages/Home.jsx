import React, { useEffect, useState } from 'react'
import { PostCart } from '../components'
import { db } from '../firebase/Confi'
import useTitle from '../hooks/useTitle'
import { getDocs,collection } from 'firebase/firestore'
import Skeleton from 'react-loading-skeleton'
function Home() { 
const [posts, setPosts] = useState([])
console.log(posts)
useTitle("Home")
 const colref=collection(db,"posts")
 const [toggle, settoggle] = useState(false)
useEffect(()=>{
async function getpost() {
  const data=await getDocs(colref)
  // data.docs.map(document=>console.log(document.data()))
setPosts(data.docs.map(document=>({...document.data(),id:document.id})))

}

getpost()
},[toggle])
  return (
   <section>
    {posts.length==0&&<Skeleton/>}
    {posts.map(post=>
<PostCart key={post.id} toggle={toggle} settoggle={settoggle} post={post}/>
    )}
   </section>
  )
}

export default Home