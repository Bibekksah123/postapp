import React from 'react'
import Skeleton from 'react-loading-skeleton'

function Sketch() {
  return (
    <div className="card">
    <p className="title"><Skeleton /></p>
    <p className="description"><Skeleton count={3} /></p>
    <p className="control">
        <span className="author"><Skeleton/></span>
    </p>
</div>
  )
}

export default Sketch