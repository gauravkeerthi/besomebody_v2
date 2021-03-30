import React, { Component } from "react";
import {  Link } from "react-router-dom";


class LandingPage extends Component {
  render() {
    return (
      
        <>
            <h1>LandingPage</h1>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/game">New Game</Link></li>
          </ul>
        </>
        
      
      
    )
  }
}

export default LandingPage;