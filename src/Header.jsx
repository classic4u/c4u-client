import { AppBar, Drawer, MenuItem } from 'material-ui'
import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  handleCloseMenu = () => this.setState({ open: false })

  handleToggleMenu = () => this.setState({ open: !this.state.open })

  render() {
    return (
      <header>
        <AppBar
          title="classic4u"
          iconElementRight={<img src="logo.png" className="logo" alt="Logo" />}
          onLeftIconButtonTouchTap={this.handleToggleMenu}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open: open })}
        >
          <MenuItem
            containerElement={<Link to="/" />}
            primaryText="Home"
            onTouchTap={this.handleCloseMenu}
          />
          <MenuItem
            containerElement={<Link to="/setup" />}
            primaryText="Stream Setup"
            onTouchTap={this.handleCloseMenu}
          />
          <MenuItem
            containerElement={<Link to="/bdo" />}
            primaryText="BDO"
            onTouchTap={this.handleCloseMenu}
          />
        </Drawer>
      </header>
    )
  }
}

export default Header
