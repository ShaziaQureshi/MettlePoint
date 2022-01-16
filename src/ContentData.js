import React from "react"
import ReactDOM from "react-dom"
function PointerCard(props){
  return(
    <div>
      <h1>{props.pointer.heading}</h1>
      <h3>{props.pointer.headingText}</h3>
      <ul className="subpointers--class">
        {props.pointer.pointers.map(data=>{
          return(
            <li>{data}</li>)
        })}
        </ul>
      </div>
  )
}

function ContentData(props){
  return(
<div className="content--data--class">
  <div style={{borderRadius:"20px",padding:"20px",textAlign:"center",backgroundColor: "rgb(253, 245, 249"}}>
  <span className="steps--class">{props.data.heading}</span><br/>
  <span className="subheading--class">{props.data.subHeading}</span><br/>
  <span className="headingtext--class">{props.data.headingText}
  </span><br/>
  </div>
  {props.data.subPointers.map(subpointer=>{
    return(<PointerCard 
    pointer={subpointer}/>)
  })}
  <div>
  </div>
  </div>
  )
}

export default ContentData