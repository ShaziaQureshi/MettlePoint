import React from "react"
import ReactDOM from "react-dom"
import Data from "./Data"
import ContentData from "./ContentData"
function Content()
{
  return(
    <section className="content--class">
      {Data.map(item=>{
        return(
        <ContentData 
        data={item}/>)
      })}
      </section>
  )
}
export default Content