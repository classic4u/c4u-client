import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from 'App.jsx'

injectTapEventPlugin();

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('app'))
