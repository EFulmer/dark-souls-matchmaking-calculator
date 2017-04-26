import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const calcSL = (level) => {
  const MIN_LEVEL = 1
  const MAX_LEVEL = 713
  const delta = level * 0.1 + 10
  const lo = Math.max(1, level - delta)
  const hi = Math.min(713, level + delta)
  return {
    coop: [lo, hi],
    darkmoon: [MIN_LEVEL, hi],
    darkwraith: [lo, MAX_LEVEL],
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form action="#" onSubmit={event => {
          const { target } = event
          const value = target.getElementsByTagName('input')[0].value
          alert(calcSL(value).toString())
        }}>
          <input type="text"/>
          <button type="submit">Who can I PvP with?</button>
        </form>
      </div>
    );
  }
}

export default App;
