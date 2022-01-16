import React from "react"
import ReactDOM from "react-dom"
function ContentData(props){
  return(
<div>
  <h1>{props.data.heading}</h1>
  <h2>{props.data.subHeading}</h2>
  <h3>{props.data.headingText}</h3>
  {props.data.subPointers.map(subpointer=>{
    return(subpointer.heading)
  })}
  <div>
  </div>
  </div>
  )
}

export default ContentData