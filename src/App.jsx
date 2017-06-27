import { grey500, grey700, grey800 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import React from 'react'
import { Link } from 'react-router'

import Footer from 'Footer.jsx'
import Header from 'Header.jsx'
import Main from 'Main.jsx'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey500,
    primary2Color: grey700,
    primary3Color: grey800,
    accent1Color: grey500,
    accent2Color: grey700,
    accent3Color: grey800,
  },
})


const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  </MuiThemeProvider>
)

export default App
