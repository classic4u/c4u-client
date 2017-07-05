import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { logLinkClick, logPageView } from 'Analytics'
import BDO from 'BDO.jsx'
import Enhancing from 'Enhancing.jsx'
import Home from 'Home.jsx'
import Setup from 'Setup.jsx'


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/bdo" component={BDO} />
      <Route path="/bdo/enhancing" component={Enhancing} />
      <Route path="/setup" component={Setup} />
    </Switch>
  </main>
)

export default Main
