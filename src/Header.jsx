import { AppBar, Tabs, Tab } from 'material-ui'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <AppBar
      title="classic4u"
      iconElementLeft={<img src="logo.png" className="logo" alt="Logo" />}
    />
    <Tabs>
      <Tab label={"Root"} value={0} containerElement={<Link to="/" />} />
      <Tab label={"Stream Setup"} value={1} containerElement={<Link to="/setup" />} />
      <Tab label={"BDO"} value={2} containerElement={<Link to="/bdo" />} />
    </Tabs>
  </header>
)

export default Header
