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
        title="Enhancing"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <Table>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>
                <a target="_blank" href="https://docs.google.com/spreadsheets/d/1WzAeIFslcWhZ-TudUTrvt4S6ejGF8Uo5FwVqNivfHK0/pubhtml#">BDO Enhancement Tables</a>
              </TableRowColumn>
              <TableRowColumn>
                My bible for figuring out what failstacks to build for my enhancement attempts. Note that if you have artisan's memories to use with memory fragments, that may change the math for you.
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                <a target="_blank" href="http://www.incendar.com/failstackoptimizer.php">Incendar's FailStack Optimizer</a>
              </TableRowColumn>
              <TableRowColumn>
                A quick table showing the cheapest method to get to a given number of failstacks.
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </CardText>
    </Card>
    <Card>
      <CardHeader
        title="Leveling"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <Table>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>
                <a href="https://www.reddit.com/r/blackdesertonline/comments/5orkr7/answers_faq_about_grinding/">FAQ About Grinding</a>
              </TableRowColumn>
              <TableRowColumn>
                A list of grind spots & recommended AP/DP. Quite useful for me when I was first figuring out where to grind post-50.
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </CardText>
    </Card>
    <Card>
      <CardHeader
        title="Life Skills"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <Table>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>
                <a target="_blank" href="https://www.youtube.com/watch?v=uH2sN62JUSI">Container Trading Guide</a>
              </TableRowColumn>
              <TableRowColumn>
                The most enjoyable active trading method, IMO.
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </CardText>
    </Card>
  </section>
)

export default BDO
