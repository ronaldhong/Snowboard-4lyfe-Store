import React, { Component } from 'react';
// import {Route, Switch} from 'react-router-dom'
import '../styles/App.css';
// import ReactPlayer from 'react-player'
import Features from './Features'
import features from '../data/features'

class Home extends Component {

  render() {
    let feature_title = {
      'color': 'white',
      'textAlign': 'center',
      "paddingTop": "20px",
      "fontFamily":"fantasy",
      "letterSpacing": 15
    }
    return(
      <div className="home_page">
        <div className="popular_items">
          <div id="block"></div>
          <div><h2 style={feature_title}>New Arrival!!!</h2></div>
          <div id="block"></div>
        </div>
        <div className="home_items">
          {
            features.map( (product) => <Features key={product.id} product={product} />)
          }
          {/* <div>
            <ReactPlayer url={features[0].video}controls="true"  />
          </div> */}
        </div>

      </div>
    )
  }
}
export default Home;
