import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import FontIcon from 'material-ui/FontIcon'
import React from 'react'

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>

const Footer = () => (
  <BottomNavigation>
    <BottomNavigationItem
      label="Twitter"
      icon={recentsIcon}
      onTouchTap={() => window.open('https://twitter.com/classic4utv')}
    ></BottomNavigationItem>
    <BottomNavigationItem
      label="Twitch"
      icon={recentsIcon}
      onTouchTap={() => window.open('https://www.twitch.tv/classic4u')}
    />
    <BottomNavigationItem
      label="Steam"
      icon={recentsIcon}
      onTouchTap={() => window.open('https://steamcommunity.com/id/classic4u/')}
    />
    <BottomNavigationItem
      label="GitHub"
      icon={recentsIcon}
      onTouchTap={() => window.open('https://github.com/classic4u')}
    />
  </BottomNavigation>
)

export default Footer
