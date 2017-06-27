import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import FontIcon from 'material-ui/FontIcon'
import React from 'react'

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>

const Footer = () => (
  <BottomNavigation>
    <BottomNavigationItem
      label="Twitter"
      icon={recentsIcon}
    />
    <BottomNavigationItem
      label="Twitch"
      icon={recentsIcon}
    />
    <BottomNavigationItem
      label="Steam"
      icon={recentsIcon}
    />
    <BottomNavigationItem
      label="GitHub"
      icon={recentsIcon}
    />
  </BottomNavigation>
)

export default Footer
