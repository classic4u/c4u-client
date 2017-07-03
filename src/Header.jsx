import { AppBar, Drawer, MenuItem } from 'material-ui'
import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  // TODO: USE A LAMBDA FUNCTION!!!!
  handleToggleMenu() {
   this.setState({ open: !this.state.open })
 }

  render() {
    return (
      <header>
        <AppBar
          title="classic4u"
          iconElementRight={<img src="logo.png" className="logo" alt="Logo" />}
          onLeftIconButtonTouchTap={this.handleToggleMenu}
        />
        <Drawer open={this.state.open}>
          <MenuItem
            containerElement={<Link to="/" />}
            primaryText="Home"
            onTouchTap={this.handleToggleMenu}
          />
          <MenuItem
            containerElement={<Link to="/setup" />}
            primaryText="Stream Setup"
            onTouchTap={this.handleToggleMenu}
          />
          <MenuItem
            containerElement={<Link to="/bdo" />}
            primaryText="BDO"
            onTouchTap={this.handleToggleMenu}
          />
        </Drawer>
      </header>
    )
  }
}

export default Header
