import React, { Component} from 'react';
import funnyslow from './images/funnyslow.jpg';
import './ContactCss.css';


class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
          }
    
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
    onEmailChange(event) {
        this.setState({email: event.target.value})
      }

    onPhoneChange(event) {
        this.setState({phone: event.target.value})
      }
    
    onMessageChange(event) {
        this.setState({message: event.target.value})
      }
    
    handleSubmit(event) {
        alert('Thanks ' + this.state.name + ' We have well received your message & will reply you very soon !');
        event.preventDefault();   
      }


    render(){
    return(
        <div className="contact">
            
            <div>
                <div className="contactProject">
                    <h2>Got a new project ?</h2>
                </div>
                <div className="contactProjectText">
                    <p>Feel free to send us an <a href="mailto:contact@slowcreativestudio.com">email</a> to tell us more about your project.</p>
                </div>
            </div>

            <div>
                <div className="contactDiscover">
                    <h2>Curious to discover more ?</h2>
                </div>
                <div className="contactDiscoverText">
                    <p>Have a look at our <a target="blank" href='https://www.instagram.com/slow.creative/'>Instagram</a> account !</p>
                </div>
            </div>

            <div>
                <div className="contactFormTitle">
                    <h2>ContactUs.</h2>
                </div>
                <form className="contactForm" onSubmit={this.handleSubmit} method="POST">
                    <div className="formBoxDiv"><input type="text" value={this.state.name} placeholder="Name*" onChange={this.onNameChange} className="formBox" /></div>
                    <div className="formBoxDiv"><input type="email" value={this.state.email} placeholder="Email*" onChange={this.onEmailChange} className="formBox" /></div>
                    <div className="formBoxDiv"><input type="text" value={this.state.phone} placeholder="Phone" onChange={this.onPhoneChange} className="formBox" /></div>
                    <div className="formBoxDiv"><textarea type="text" value={this.state.message} placeholder="Message*" onChange={this.onMessageChange} className="formBoxMessage" rowSpan={3} /></div>
                    <button type="submit" className="formButton">Send.</button>
                </form>
            </div>

            <div>
                <div className="contactAnything">
                    <h2>Anything else to say ?</h2>
                </div>
                <div className="contactSlowStudio">
                    <div className="contactSlowStudioText">
                        <p>Slõw Creative Studio</p>
                        <p>48 Avenue du President Kennedy</p>
                        <p>64200 Biarritz</p>
                        <p>France</p>
                        <br></br>
                        <p>+33 6 88 50 93 81</p>
                        <br></br>
                        <p><a href="mailto:contact@slowcreativestudio.com">contact@slowcreativestudio.com</a></p>
                    </div>
                    <div className="funnySlow">
                        <img src={funnyslow} alt="funny-slow" />
                    </div>
                </div>
            </div>


        </div>
    )
    
}
}

export default Contact ;