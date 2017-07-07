import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import FontIcon from 'material-ui/FontIcon'
import React from 'react'

const twitterIcon = <FontIcon className="fa fa-twitter" />
const twitchIcon = <FontIcon className="fa fa-twitch" />
const discordIcon = <FontIcon>Discord</FontIcon>
const steamIcon = <FontIcon className="fa fa-steam" />
const gitHubIcon = <FontIcon className="fa fa-github" />

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
      icon={discordIcon}
      onTouchTap={() => window.open('https://discord.gg/D22h5Mv')}
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
