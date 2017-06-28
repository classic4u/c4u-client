import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import FontIcon from 'material-ui/FontIcon'
import React from 'react'

const twitterIcon = <FontIcon>Twitter</FontIcon>
const twitchIcon = <FontIcon>Twitch</FontIcon>
const steamIcon = <FontIcon>Steam</FontIcon>
const gitHubIcon = <FontIcon>GitHub</FontIcon>

const Footer = () => (
  <BottomNavigation>
    <BottomNavigationItem
      icon={twitterIcon}
      onTouchTap={() => window.open('https://twitter.com/classic4utv')}
    ></BottomNavigationItem>
    <BottomNavigationItem
      icon={twitchIcon}
      onTouchTap={() => window.open('https://www.twitch.tv/classic4u')}
    />
    <BottomNavigationItem
      icon={steamIcon}
      onTouchTap={() => window.open('https://steamcommunity.com/id/classic4u/')}
    />
    <BottomNavigationItem
      icon={gitHubIcon}
      onTouchTap={() => window.open('https://github.com/classic4u')}
    />
  </BottomNavigation>
)

export default Footer
