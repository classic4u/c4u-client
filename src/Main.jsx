import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { logPageView } from 'analytics'
import BDO from 'BDO.jsx'
import Enhancing from 'Enhancing.jsx'
import Home from 'Home.jsx'
import Setup from 'Setup.jsx'


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" render={logPageView(<Home />)} />
      <Route exact path="/bdo" render={logPageView(<BDO />)} />
      <Route path="/bdo/enhancing" render={logPageView(<Enhancing />)} />
      <Route path="/setup" render={logPageView(<Setup />)} />
    </Switch>
  </main>
)

export default Main
