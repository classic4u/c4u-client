import React from 'react'
import { Route, Switch } from 'react-router-dom'

import BDO from 'BDO.jsx'
import Home from 'Home.jsx'
import Setup from 'Setup.jsx'


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/bdo" component={BDO} />
      <Route path="/setup" component={Setup} />
    </Switch>
  </main>
)

export default Main
