import React, { Component } from 'react';
import './App.css';
import DS1 from './DS1.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Dark Souls Multiplayer Matchmaking Calculator</h2>
        </div>
        <p className="App-intro">
        </p>
        <DS1 />
      </div>
    );
  }
}

export default App;
