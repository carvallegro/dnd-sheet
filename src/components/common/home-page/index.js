import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => <div>
  <h1>DnD Character sheet</h1>
  <h2>Ultra pre-alpha</h2>
  <ul>
    <li><Link to='/sheet'>Sheet</Link></li>
    <li><Link to='/print'>Print Preview</Link></li>
  </ul>
</div>

export default HomePage
