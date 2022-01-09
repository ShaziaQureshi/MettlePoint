import React,{Component} from "react"
import ReactDOM from "react-dom"
const persoData="We all are different in our own ways and so is our healing journey. That is the reason we are also offereing personalized Help for every indivaual. If the above content intrigued you and you are at this page, make sure to provide your details below so we can reach out for you."

class Personalized extends Component{
constructor(){
  super()
  this.handleOnClick=this.handleOnClick.bind()
}
handleOnClick(event){
const value=event.target.value
console.log(value)
if(name=="Username")
  console.log("Name")

}
  render(){
    return (
      <section className="personalized--class">
          <div className="personalized--divi">
            <div className="box1">
                <span style={{fontSize:"6em"}}>Need Personalized Inputs?</span>
                <p style={{color:"#6fa67e"}}>{persoData}</p>
            </div>
            <div className="box2">
                <form className="Personalized--Form">
                    <lable className="form--lable">Name</lable><br/>
                    <input className="form-data"
                    placeholder="Enter Your Name"
                    name="Username"
                    onClick={this.handleOnClick}
                    type="text"></input><br/>

                    <lable className="form--lable">E-Mail</lable><br/>
                    <input className="form-data"
                    placeholder="Enter Your Email Address"
                    type="text"></input><br/>

                    <lable className="form--lable">Message</lable><br/>
                    <input className="form-data"
                    placeholder="Thought?"
                    type="textArea"></input><br/>

                    <lable className="form--lable">Phone Number</lable><br/>
                    <input className="form-data"
                    placeholder="Enter Your Phone Number"
                    type="text"></input><br/>

                    <button>SUBMIT</button>
                </form>
            </div>
           </div>
      </section>
    );
  }
}

export default Personalized