import React, { useRef } from 'react'
import { db } from '../firebase/Confi'
import { auth } from '../firebase/Confi'

import { collection,addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
function CreatePost() {
  const navigate=useNavigate()
  const colref=collection(db,"posts")
const titile=useRef()
const descr=useRef()
async  function handlesummit(e){
    e.preventDefault()
     const document={
       title:titile.current.value,
       description:descr.current.value,
     authors:{
        author:auth.currentUser.displayName,
        id:auth.currentUser.uid
     }
       
     }
     await addDoc(colref,document)
     
navigate("/")
  }
  return (
   <section className='create'>
    <div className="heading">
      <h1>Add New Post</h1>
    </div>
    <form className="createPost" onSubmit={handlesummit}>
      <input type="text" ref={titile} placeholder='title' className='title' maxLength={50} required name='title' />
      <textarea name="description" className="description" type="text" placeholder='description' ref={descr}  maxLength={50} required ></textarea>
      <button type='submit' className='submit'> create</button>
    </form>
   </section>
  )
}

export default CreatePost