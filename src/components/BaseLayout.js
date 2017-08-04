import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import '../styles/App.css';
// let FontAwesome = require('react-fontawesome');
let Snow = require('react-snow-effect');


class BaseLayout extends Component {
  constructor(props){
      super(props)
      this.state={
        itemsInCart: 0
      }
    }
  handleAddtoCart(number){
    number.preventDefault()
    this.setState({
      itemsInCart: this.state.itemsInCart + 1
    })
    console.log(this.state.itemsInCart);
  }
  render(){
    return(
    <div>
      <div>
        <div className="baselayout">
          <Snow />
          <div className="nav-bar">
            <NavLink exact to="/"><img id="logo" src="https://images.genius.com/05dc41ee6d4c4ca55d28c6e1419e0370.500x500x1.jpg" alt="logo" height="70" width="100"/></NavLink>
            <nav>
              <NavLink exact to="/home" activeStyle={{"opacity": 1}}>Home ホーム</NavLink>
              <NavLink to="/products" activeStyle={{"opacity": 1}}>Store しょうひん</NavLink>
              <NavLink exact to="/"  activeStyle={{"opacity": 1}}>About しょうかい</NavLink>
              <NavLink to="/contact" activeStyle={{"opacity": 1}}>Contact れんらく</NavLink>
            </nav>
            <div id="shopping_cart">
              <span id="itemsInCart">{this.state.itemsInCart}</span>
              <img src="http://www.icon100.com/up/4012/128/43-Shopping-cart-circle.png" alt="shopping_cart" height="50" width="50" />
            </div>
          </div>
          <div className="header">
            <div className="title">
              <img id="evolve_logo" src="http://www.replicatedtypo.com/wp-content/uploads/2012/10/evolution-winter-school.jpg" alt="evolve-logo" height="140" width="450"/>
              <div className="store_name">
                <h1 id="brand">Snowboard <del>4lyfe</del></h1>
                <h4>Keep calm and snowboard</h4>
              </div>
            </div>
          </div>
        </div>
        <div style={{"background-color":"#bc7878"}}>
          {this.props.children}
        </div>
      </div>
      <div className="footer">
        <footer>Copyright © 2017 by Ronald Hong. All rights reserved.</footer>
      </div>
    </div>
    )
  }
}
export default BaseLayout;
