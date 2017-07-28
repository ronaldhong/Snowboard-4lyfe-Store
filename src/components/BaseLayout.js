import React, { Component } from 'react';
import {NavLink, Link, BrowserRouter, Route, Switch} from 'react-router-dom'
import '../styles/App.css';
let Snow = require('react-snow-effect');


class BaseLayout extends Component {
  constructor(props){
    super(props);

  }


      render(){
        return(
        <div>
          <div className="baselayout">
            <Snow />
            <div className="header">
              <div className="title">
                <img id="snow_logo" src="https://rlv.zcache.com/snowboarding_snowboard_evolution_classic_round_sticker-rf371c27d6ea04a7e98d0ccab2c6cdc4e_v9waf_8byvr_324.jpg" height="140" width="200"/>
                <div className="store_name">
                  <h1 id="border">Snowboard 4lyfe</h1>
                  {/* <h1 id="land">Land</h1> */}
                </div>
              </div>
              <nav>
                <NavLink exact to="/" activeStyle={{ color: 'red' }}>Home</NavLink>
                <NavLink to="/about" activeStyle={{ color: 'red' }}>About</NavLink>
                <NavLink to="/contact" activeStyle={{color: 'red'}}>Contact</NavLink>
              </nav>
            </div>
          </div>
          {this.props.children}

        </div>
      )
  }
}
export default BaseLayout;
