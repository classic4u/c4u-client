import {
  Card,
  CardActions,
  CardHeader,
  CardText,
  Divider,
  FlatButton,
  Paper
} from 'material-ui'
import React from 'react'

const BDO = () => (
  <section>
    Black Desert Online
    <Divider />
    <Paper>
      <a target="_blank" href="http://bdoplanner.com/save/[[13],[11046,18,[15125,15035]],[11047,17,[15136,15136]],[11049,18,[-1,-1]],[11015,18,[-1,-1]],[[12027,0],[12007,2]],[[11817,2],[11816,2]],[12220,1],[11613,2],[11210,18,[-1,-1]],[14825,18],[11340,18,[-1,-1]],[-1],[-1,[-1]],[-1],[-1],[-1],[-1]]">Current Build</a>
      <a target="_blank" href="">Target Build</a>
      <p>Gear Rationalization: I think we need to.</p>
    </Paper>
    <Paper>
      BDO Resources: Here are some super useful BDO resources.
      <Card>
        <CardHeader
          title="Leveling"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton label="fag" />
        </CardActions>
        <CardText expandable={true}>
          Blah blah blah
        </CardText>
      </Card>
    </Paper>
  </section>
)

export default BDO
