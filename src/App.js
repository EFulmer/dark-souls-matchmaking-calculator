import { map, toInteger } from 'lodash';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// level * scalar + constant
const calcSL = (level) => {
  const MIN_LEVEL = 1
  const MAX_LEVEL = 713
  const delta = level * 0.1 + 10
  // const darkmoonDelta = level * 0.2 + 
  const lo = toInteger(Math.max(1, level - delta))
  const hi = toInteger(Math.min(713, level + delta))
  return {
    coop: [lo, hi],
    darkmoon: [MIN_LEVEL, hi],
    darkwraith: [lo, MAX_LEVEL],
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {levels} = this.state

    const displayLevels = map(levels, (v, k) => (
      <li key={k}>{k}: {v[0]} - {v[1]}</li>
    ))

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        </p>
        <form action="#" onSubmit={event => {
          const { target } = event
          const value = target.getElementsByTagName('input')[0].value
          this.setState({levels: calcSL(value)})
        }}>
          <input type="text"/>
          <button type="submit">Who can I PvP with?</button>
        </form>
        <ul>
          {displayLevels}
        </ul>
      </div>
    );
  }
}

export default App;
