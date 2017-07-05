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
// TODO: Links don't appear as links when you hover over them?
const BDO = () => (
  <section>
    <Card>
      <CardTitle title="Black Desert Online" />
    </Card>
    <Card>
      <CardText>
        <a target="_blank" href="http://bdoplanner.com/save/[[13],[11046,18,[15125,15035]],[11047,17,[15136,15136]],[11016,17,[15111,15111]],[11015,18,[15118,15116]],[[12027,0],[12007,2]],[[11817,2],[11816,2]],[12220,1],[11613,2],[11210,18,[15605,15026]],[14825,18],[11340,18,[15130,15130]],[-1],[-1,[-1]],[-1],[-1],[-1],[-1]]">Current Build</a>
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
            title={<a target="_blank" href="https://docs.google.com/spreadsheets/d/1HE1Lr-7C2ChlCOsBc14z_hY5dkh9tC6tYZFqHgNGIbA/htmlview#">Datamined DP Stats</a>}
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
            title={<a target="_blank" href="https://docs.google.com/spreadsheets/d/1WzAeIFslcWhZ-TudUTrvt4S6ejGF8Uo5FwVqNivfHK0/pubhtml#">BDO Enhancement Tables</a>}
          />
          <CardText>My bible for figuring out what failstacks to build for my enhancement attempts. Note that if you have artisan's memories to use with memory fragments, that may change the math for you.</CardText>
        </Card>
        <Card>
          <CardHeader
            title={<a target="_blank" href="http://www.incendar.com/failstackoptimizer.php">Incendar's FailStack Optimizer</a>}
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
            title={<a target="_blank" href="http://bddatabase.net/us/">bddatabase.net</a>}
          />
          <CardText>
            This site is a great resource for item and quest information. Pretty comprehensive.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={<a target="_blank" href="http://bdoplanner.com/">bdoplanner.com</a>}
          />
          <CardText>
            Invaluable gear planner. Use this to mess around with different gear setups and figure out which upgrade you want to go for next.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={<a target="_blank" href="http://www.somethinglovely.net/bdo/">somethinglovely.net</a>}
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
            title={<a target="_blank" href="https://www.reddit.com/r/blackdesertonline/comments/5orkr7/answers_faq_about_grinding/">FAQ About Grinding</a>}
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
            title={<a target="_blank" href="https://www.youtube.com/watch?v=uH2sN62JUSI">Container Trading Guide</a>}
          />
          <CardText>The most enjoyable active trading method, IMO. Follow this if you're trying to level up Trading to Master 2 for that sweet sweet trading buff.</CardText>
        </Card>
      </CardText>
    </Card>
  </section>
)

export default BDO
