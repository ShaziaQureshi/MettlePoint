import React,{Component} from "react"
import ReactDOM from "react-dom"
import {init} from '@emailjs/browser'
import emailjs from 'emailjs-com';
emailjs.init("user_SG2lXtweFNiLdVeQjzP5V");
import emailkey from "./emailkey"
const persoData="We all are different in our own ways and so is our healing journey. That is the reason we are also offereing personalized Help for every indivaual. If the above content intrigued you and you are at this page, make sure to provide your details below so we can reach out for you."

class Personalized extends Component{
constructor(props){
  super(props)
  this.state={
    name:"",
    email:"",
    message:"",
    phone:""
  };
  this.handleOnClick=this.handleOnClick.bind(this)
  this.handleOnSubmit=this.handleOnSubmit.bind(this)
}
handleOnClick(event){
const data=event.target.value
const namevar=event.target.name
//console.log(data)
if(namevar=="Username")
  {
    this.setState({name:data})
  }
  else if(namevar=="email")
    this.setState({email:data})
  else if(namevar=="message")
    this.setState({message:data})
  else if(namevar=="phone")
    this.setState({phone:data})
}
handleOnSubmit(event){
event.preventDefault()
console.log(emailkey.USER_ID)
 const templateParams = {
    to_name: 'xyz',
    from_name: 'abc',
    message_html: 'Please Find out the attached file'
  }
emailjs.send('service_e1y1fun', 'template_cczqded', templateParams,)
.then(function(response) {
  console.log('SUCCESS!', response.status, response.text);
}, function(error) {
  console.log('FAILED...', error);
});
//emailjs.send("service_e1y1fun","template_cczqded");
//emailjs.send('gmail',emailkey.TEMPLATE_ID,event.target,emailkey.USER_ID)


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
                    onChange={this.handleOnClick}
                    type="text"></input><br/>

                    <lable className="form--lable">E-Mail</lable><br/>
                    <input className="form-data"
                    placeholder="Enter Your Email Address"
                    name="email"
                    onChange={this.handleOnClick}
                    type="text"></input><br/>

                    <lable className="form--lable">Message</lable><br/>
                    <input className="form-data"
                    placeholder="Thought?"
                    name="message"
                    onChange={this.handleOnClick}
                    type="textArea"></input><br/>

                    <lable className="form--lable">Phone Number</lable><br/>
                    <input className="form-data"
                    placeholder="Enter Your Phone Number"
                    name="phone"
                    onChange={this.handleOnClick}
                    type="text"></input><br/>

                    <button
                    onClick={this.handleOnSubmit}>SUBMIT</button>
                </form>
            </div>
           </div>
      </section>
    );
  }
}

export default Personalized