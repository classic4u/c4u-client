import { Card, CardTitle, CardText } from 'material-ui'
import React from 'react'

const Home = () => (
  <section>
    <Card>
      <CardTitle title={"Welcome."} />
      <CardText>
        <p>I'm classic4u.  I'm trying to take a well-rounded approach to the gaming lifestyle.</p>
        <p>Come join me as I attempt to better myself, better my community, and pwn some n00bz in the process!</p>
        <p>This website is a work-in-progress. Check in every now and then!</p>
      </CardText>
    </Card>
    <Card>
      <CardTitle title={"FAQ"} />
      <CardText>
        <p><b>How old are you?</b> 28</p>
        <p><b>Where do you live?</b> Los Angeles</p>
        <p><b>What do you do for a living?</b> I'm a software developer by career. I'm lucky enough to be taking a year off to pursue my dreams! Investing in the cryptocurrency sphere, and streaming on twitch.tv.</p>
        <p><b>What other stuff do you do?</b> I enjoy playing the guitar, going to concerts, drinking whiskey with friends, tabletop gaming, reading, amongst other stuff.</p>
        <p><b>What's with this "well-rounded" bullshit?</b> I have a dream, that one day, gamers will be regarded as more than Cheeto-dusted, Mountain Dew-ridden, scoliosis-having memesters. I'm trying to build a community that enjoys gaming but supports each other in all aspects of life.</p>
        <p><b>Anything else I should know about you?</b> I've dealt with a lot of anxiety my whole life, and gaming has been one of my outlets since I was about 8 years old. Some things never change, but the way you deal with them does.</p>
      </CardText>
    </Card>
    <Card>
      <CardTitle title={"The four tenets of Classicism"} />
      <CardText>
        <p>Depth.</p>
        <p>Breadth.</p>
        <p>Community.</p>
        <p>Self.</p>
      </CardText>
    </Card>

  </section>
)

export default Home
