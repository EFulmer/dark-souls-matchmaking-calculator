import { map, toInteger } from 'lodash';
import React, { Component } from 'react';

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
  const lo          = Math.ceil( Math.max(MIN_LEVEL, lv - delta) )
  const hi          = Math.ceil( Math.min(MAX_LEVEL, lv + delta) )
  const dmLow       = Math.ceil( Math.max(MIN_LEVEL, lv - dmDeltaLow) )
  const dmHigh      = Math.ceil( Math.min(MAX_LEVEL, lv + dmDeltaHigh) )

  return [ 
    {name: 'Co-Op (White Sign Soapstone)',    low: lo,    high: hi,        img: 'White_Sign_Soapstone.png'},
    {name: 'Gravelord Servant',               low: lo,    high: hi,        img: 'Eye_of_Death.png'},
    {name: 'Path of the Dragon',              low: lo,    high: hi,        img: 'Dragon_Eye.png'},
    {name: 'Forest Hunter',                   low: lo,    high: MAX_LEVEL, img: 'Cat_Covenant_Ring.png'},
    {name: 'PvP Summon (Red Sign Soapstone)', low: lo,    high: MAX_LEVEL, img: 'Red_Sign_Soapstone.png'},
    {name: 'Darkwraith',                      low: dmLow, high: dmHigh,    img: 'Red_Eye_Orb.png'},
    {name: 'Darkmoon Blade',                  low: dmLow, high: dmHigh,    img: 'Darkmoon_Blade_Covenant_Ring.png'},
  ]
}

export default class DS1 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { levels } = this.state

    const displayLevels = (
      (!!levels) ? 
        <table><tr><th /> <th>Covenant</th> <th>Minimum Level</th> <th>Maximum Level</th> </tr>
          {map(levels, (lv) => (
            <tr><td><img src={ lv.img } width={40} height={50}/></td><td>{ lv.name }</td> <td>{ lv.low }</td> <td>{ lv.high }</td></tr>
          ))}
        </table>
        : undefined
    )

    return (
      <div>
        <form action="#" onSubmit={event => {
          const { target } = event
          const value = target.getElementsByTagName('input')[0].value
          this.setState( {levels: calcSL(value) } )
        }}>
          <input type="text"/>
          <button type="submit">Who can I PvP with?</button>
        </form>
        { displayLevels }
      </div>
    );
  }
}
