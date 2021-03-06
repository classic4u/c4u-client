import {
  Card,
  CardHeader,
  CardText,
  CardTitle,
  Divider,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui'
import React from 'react'
import { OutboundLink } from 'react-ga'
import { Link } from 'react-router-dom'

// TODO: Links don't appear as links when you hover over them?
const BDO = () => (
  <section>
    <Card>
      <CardTitle title="Black Desert Online" />
    </Card>
    <Card>
      <CardText>
        <OutboundLink
          eventLabel="Current Build"
          to="http://bdoplanner.com/save/[[13],[11046,18,[15125,15035]],[11047,17,[15136,15136]],[11016,17,[15111,15111]],[11015,18,[15118,15116]],[[12027,0],[12007,2]],[[11817,2],[11816,2]],[12220,1],[11613,2],[11210,18,[15605,15026]],[14825,18],[11340,18,[15130,15130]],[-1],[-1,[-1]],[-1],[-1],[-1],[-1]]"
          target="_blank"
        >
          Current Build
        </OutboundLink>
      </CardText>
    </Card>
    <Card>
      <CardTitle
        title="Classic BDO Guides"
        subtitle="Guides from Yours Truly"
      />
      <CardText>
        <Card>
          <CardHeader
            title={<Link to="/bdo/enhancing">The Classic Guide to Enhancing & Failstacking</Link>}
          />
          <CardText>
            Learn how to enhance & failstack! The basics.
          </CardText>
        </Card>
      </CardText>
    </Card>
    <Card>
      <CardTitle
        title="BDO Guides Meta-Guide"
        subtitle="Some resources I've found really useful with explanations as to why."
      />
    </Card>
    <Card>
      <CardHeader
        title="Advanced"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <Card>
          <CardHeader
            title={
              <OutboundLink
                eventLabel="MetaGuide - Datamined DP Stats"
                to="https://docs.google.com/spreadsheets/d/1HE1Lr-7C2ChlCOsBc14z_hY5dkh9tC6tYZFqHgNGIbA/htmlview#"
                target="_blank"
              >
                Datamined DP Stats
              </OutboundLink>
            }
          />
          <CardText>
            This supposedly datamined table shows a breakdown of DP per piece of gear (how much evasion vs DR). The value of boss armor is clearly demonstrated in the increased evasion.
          </CardText>
        </Card>
      </CardText>
    </Card>
    <Card>
      <CardHeader
        title="Enhancing"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <Card>
          <CardHeader
            title={
              <OutboundLink
                eventLabel="MetaGuide - BDO Enhancement Tables"
                target="_blank"
                to="https://docs.google.com/spreadsheets/d/1WzAeIFslcWhZ-TudUTrvt4S6ejGF8Uo5FwVqNivfHK0/pubhtml#">
              >
                BDO Enhancement Tables
              </OutboundLink>
            }
          />
          <CardText>My bible for figuring out what failstacks to build for my enhancement attempts. Note that if you have artisan's memories to use with memory fragments, that may change the math for you.</CardText>
        </Card>
        <Card>
          <CardHeader
            title={
              <OutboundLink
                eventLabel="MetaGuide - Incendar's FailStack Optimizer"
                target="_blank"
                to="http://www.incendar.com/failstackoptimizer.php"
              >
                Incendar's FailStack Optimizer
              </OutboundLink>
              }
          />
          <CardText>A quick table showing the cheapest method to get to a given number of failstacks.</CardText>
        </Card>
      </CardText>
    </Card>
    <Card>
      <CardHeader
        title="General"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <Card>
          <CardHeader
            title={
              <OutboundLink
                eventLabel="MetaGuide - bdodatabase.net"
                target="_blank"
                to="http://bddatabase.net/us/"
              >
                bddatabase.net
              </OutboundLink>
            }
          />
          <CardText>
            This site is a great resource for item and quest information. Pretty comprehensive.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={
              <OutboundLink
                eventLabel="MetaGuide - bdoplanner.com"
                target="_blank"
                to="http://bdoplanner.com/"
              >
                bdoplanner.com
              </OutboundLink>
            }
          />
          <CardText>
            Invaluable gear planner. Use this to mess around with different gear setups and figure out which upgrade you want to go for next.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={
              <OutboundLink
                eventLabel="MetaGuide - somethinglovely.net"
                target="_blank"
                to="http://www.somethinglovely.net/bdo/"
              >
                somethinglovely.net
              </OutboundLink>
            }
          />
          <CardText>
            An interactive map with a nice UI. Use it to figure out node connections, find world boss spawns, and resource locations. There's also a Crate Calculator and Horse Calculator, both of which are useful if you're pursuing the respective life skills.
          </CardText>
        </Card>
      </CardText>
    </Card>
    <Card>
      <CardHeader
        title="Leveling"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <Card>
          <CardHeader
            title={
              <OutboundLink
                eventLabel="MetaGuide - FAQ About Grinding"
                target="_blank"
                to="https://www.reddit.com/r/blackdesertonline/comments/5orkr7/answers_faq_about_grinding/"
              >
                FAQ About Grinding
                </OutboundLink>
            }
          />
          <CardText>A list of grind spots & recommended AP/DP. Quite useful for me when I was first figuring out where to grind post-50.</CardText>
        </Card>
      </CardText>
    </Card>
    <Card>
      <CardHeader
        title="Life Skills"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <Card>
          <CardHeader
            title={
              <OutboundLink
                eventLabel="MetaGuide - Container Trading Guide"
                target="_blank"
                to="https://www.youtube.com/watch?v=uH2sN62JUSI"
              >
                Container Trading Guide
              </OutboundLink>
            }
          />
          <CardText>The most enjoyable active trading method, IMO. Follow this if you're trying to level up Trading to Master 2 for that sweet sweet trading buff.</CardText>
        </Card>
      </CardText>
    </Card>
  </section>
)

export default BDO
