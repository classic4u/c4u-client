import {
  Card,
  CardHeader,
  CardText,
  CardTitle,
  Divider,
  Paper
} from 'material-ui'
import React from 'react'

const BDO = () => (
  <section>
    <Card>
      <CardTitle title="Black Desert Online" />
    </Card>
    <Card>
      <CardText>
        <a target="_blank" href="http://bdoplanner.com/save/[[13],[11046,18,[15125,15035]],[11047,17,[15136,15136]],[11049,18,[-1,-1]],[11015,18,[-1,-1]],[[12027,0],[12007,2]],[[11817,2],[11816,2]],[12220,1],[11613,2],[11210,18,[-1,-1]],[14825,18],[11340,18,[-1,-1]],[-1],[-1,[-1]],[-1],[-1],[-1],[-1]]">Current Build</a>
      </CardText>
    </Card>
    <Card>
      <CardTitle
        title="BDO Resources"
        subtitle="Extremely Useful."
      />
    </Card>
    <Card>
      <CardHeader
        title="Leveling"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        HA HA! WIP
      </CardText>
    </Card>
    <Card>
      <CardHeader
        title="Life Skills"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        HA HA! WIP
      </CardText>
    </Card>
    <Card>
      <CardHeader
        title="Enhancing"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        HA HA! WIP
      </CardText>
    </Card>

  </section>
)

export default BDO
