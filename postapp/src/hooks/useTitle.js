import { useEffect } from "react"


function useTitle(title) {
  useEffect(()=>{
  
    document.title=`${title}`
  },[])
  return null
}

export default useTitle