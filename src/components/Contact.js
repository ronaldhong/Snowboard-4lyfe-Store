import React, { Component } from 'react';
// import {Link, BrowserRouter, Route, Switch} from 'react-router-dom'
import '../styles/App.css';
// let FontAwesome = require('react-fontawesome');

class Contact extends Component {
  constructor(props){
  super(props);
  this.state={
    email: "hong_ronald@hotmail.com",
    phone: "(832)276-7978",
    Location: "Houston, Tx"
  }
}
  render() {
    return(
      <div className="contact">
        <div className="contact_icon">
          <a href="https://www.facebook.com/ronaldshunhong"><img src="https://cdn0.tnwcdn.com/wp-content/themes/cyberdelia/assets/img/icon-facebook.svg" alt="facebook-icon" width="50px" height="50px"/></a>
          <a href="https://www.instagram.com/ron_hong919"><img src="http://www.alohaboardshop.com/wp-content/uploads/2016/01/instagram-logo.jpg" alt="instagram-icon" width="50px" height="50px"/></a>
          <a href="https://github.com/ronaldhong"><img src="https://desktop.github.com/images/github-desktop-icon.png" alt="github-icon" width="50px" height="50px"/></a>
        </div>
        <div>
          <div className="contact_info">
            <div>{this.state.email}</div>
            <div>{this.state.phone}</div>
            <div>{this.state.Location}</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Contact;
