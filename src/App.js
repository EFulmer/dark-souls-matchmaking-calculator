import { map, toInteger } from 'lodash';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const calcSL = (level) => {
  const MIN_LEVEL = 1
  const MAX_LEVEL = 713
  const lv        = toInteger(level.trim())
  if (!lv || lv < MIN_LEVEL || lv > MAX_LEVEL) {
    return {}
  }
  const delta       = (lv * 0.1) + 10
  const dmDeltaLow  = (lv * 0.2) + 50
  const dmDeltaHigh = (lv * 0.1) + 10
  const lo          = Math.max(MIN_LEVEL, lv - delta)
  const hi          = Math.min(MAX_LEVEL, lv + delta)
  const dmLow       = Math.max(MIN_LEVEL, lv - dmDeltaLow)
  const dmHigh      = Math.min(MAX_LEVEL, lv + dmDeltaHigh)
  return [
    {
      name: 'Co-Op/Gravelord/Dragonbro',
      low: lo,
      high: hi,
    },
    {
      name: 'Darkwraith/Forest Hunter',
      low: lo,
      high: MAX_LEVEL,
    },
    {
      name: 'Darkmoon',
      low: dmLow,
      high: dmHigh,
    },
  ]
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { levels } = this.state

    const displayLevels = map(levels, (lv) => (
      <li key={ lv.name }>{ lv.name }: { lv.low } - { lv.high }</li>
    ))

    return (
      <div className="App">
        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        </p>
        <form action="#" onSubmit={event => {
          const { target } = event
          const value = target.getElementsByTagName('input')[0].value
          this.setState( {levels: calcSL(value) } )
        }}>
          <input type="text"/>
          <button type="submit">Who can I PvP with?</button>
        </form>
        <ul>
          { displayLevels }
        </ul>
      </div>
    );
  }
}

export default App;
