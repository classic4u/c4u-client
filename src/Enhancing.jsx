import {
  Card,
  CardHeader,
  CardText,
  CardTitle,
  Divider,
  Paper,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui'
import React from 'react'


const Enhancing = () => (
  <section>
    <Card>
      <CardTitle title={"The Classic Guide to Enhancing & Failstacking"} />
      <CardText>
        <Card>
          <CardText>
            <Paper style={ { marginBottom: '30px', width: '320px' } }>
              <Table selectable={false} style={ { width: '320px' } }>
                <TableBody displayRowCheckbox={false}>
                  <TableRow>
                    <TableRowColumn style={ { width: '60px' } }>7/7/2017</TableRowColumn>
                    <TableRowColumn style={ { width: '50px' } }>v0.0.0</TableRowColumn>
                    <TableRowColumn style={ { width: '210px' } }>Initial Release</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
            <p>
              <strong>Hi folks. </strong>
              I'm classic4u.
              I stream over on <a target="_blank" href="https://twitch.tv/classic4u">twitch.tv</a>.
              I've baked up this guide to be a clear, thorough, yet concise introduction to enhancing & failstacking.
              Please do reach out to me if you have any sort of feedback whatsoever.
            </p>
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Why Enhance?"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <Card>
              <CardText>
                <p>
                  In BDO, most stat gains do not come from levelling up or getting new gear, but from <strong>enhancing</strong>.
                </p>
                <p>
                  Enhancing is how you raise your Attack Power (AP), Awakened Attack Power (AAP), and Defense Power (DP), as well as your secondary stats (accuracy, evasion, etc.)
                </p>
                <p>
                  To demonstrate the <strong>gainz</strong>, here's a chart breaking down a Rosar Gauntlet's AP all the way from +0 to PEN (Note that gear also has hidden stats, such as accuracy, that also go up as you enhance):
                </p>
                <Paper style={ { marginBottom: '30px', width: '220px' } }>
                  <Table selectable={false} style={ { width: '220px' } }>
                    <TableHeader displaySelectAll={false} style={ { width: '220px' }}>
                      <TableRow>
                        <TableHeaderColumn>
                          Rosar Gauntlet AP by Enhancement Level
                        </TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                      <TableRow>
                        <TableRowColumn>+0</TableRowColumn>
                        <TableRowColumn>17 ~ 22</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>+1</TableRowColumn>
                        <TableRowColumn>21 ~ 26</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>+2</TableRowColumn>
                        <TableRowColumn>24 ~ 29</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>+3</TableRowColumn>
                        <TableRowColumn>27 ~ 32</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>+4</TableRowColumn>
                        <TableRowColumn>29 ~ 34</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>+5</TableRowColumn>
                        <TableRowColumn>31 ~ 36</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>+6</TableRowColumn>
                        <TableRowColumn>34 ~ 39</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>+7</TableRowColumn>
                        <TableRowColumn>37 ~ 42</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>+8</TableRowColumn>
                        <TableRowColumn>41 ~ 46</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>+9</TableRowColumn>
                        <TableRowColumn>45 ~ 50</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>+10</TableRowColumn>
                        <TableRowColumn>49 ~ 54</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>+11</TableRowColumn>
                        <TableRowColumn>53 ~ 58</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>+12</TableRowColumn>
                        <TableRowColumn>57 ~ 62</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>+13</TableRowColumn>
                        <TableRowColumn>61 ~ 66</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>+14</TableRowColumn>
                        <TableRowColumn>65 ~ 70</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>+15</TableRowColumn>
                        <TableRowColumn>69 ~ 74</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>PRI (+16)</TableRowColumn>
                        <TableRowColumn>77 ~ 82</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>DUO (+17)</TableRowColumn>
                        <TableRowColumn>85 ~ 90</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>TRI (+18)</TableRowColumn>
                        <TableRowColumn>97 ~ 102</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>TET (+19)</TableRowColumn>
                        <TableRowColumn>105 ~ 110</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>PEN (+20)</TableRowColumn>
                        <TableRowColumn>113 ~ 118</TableRowColumn>
                      </TableRow>

                    </TableBody>
                  </Table>
                </Paper>
                <p>I use <a target="_blank" href="http://bdoplanner.com">bdoplanner.com</a> to test out different builds and enhancement levels.</p>
              </CardText>
            </Card>
          </CardText>
        </Card>
            <Card>
          <CardHeader
            title="How to Enhance"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <Card>
              <CardText>
                <p>
                  You'll need Black Stone (Armor) or Black Stone (Weapon) to enhance armor and weapons up to +15, respectively. Enhancing accessories is covered in the "Enhancing Accessories" section.
                </p>
                <p>
                  To enhance, get to the black spirit enhancing menu: Hit "," or click on the Black Spirit, click "Enhance"; alternatively you can right click a black stone to go straight to the enhancing menu.
                </p>
                <p>
                  It is safe to enhance armor up to +5 enhancement level, and weapons up to +7. After that, each enhancement attempt has a chance to fail.  If you fail an enhancement attempt, you lose the stone, and the max durability of your equipment goes down.
                </p>
              </CardText>
            </Card>
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Why Failstack?"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <Card>
              <CardText>
                <ul>
                  <li>
                    As noted above, enhancements begin to have a chance to fail as the item goes up in enhancement level. Once you fail an enhancement, notice that the "Enhancement Chance" goes up, say, from +0 to +1.
                  </li>
                  <li>
                    Each "Enhancement Chance" + is known as a failstack (FS). Each failstack you have increases your probability of successfully enhancing the item.
                  </li>
                </ul>

                <p>
                  Exactly how much, no one really knows-
                  Most of the math I have seen is based off this supposedly datamined enhancement chart from our Korean masters:
                  <img src="kr-failstacking-chart.png" style={{maxWidth: "100%", height: 'auto'}}/>
                </p>

                <p>
                  This <a target="_blank" src="https://docs.google.com/spreadsheets/d/1WzAeIFslcWhZ-TudUTrvt4S6ejGF8Uo5FwVqNivfHK0/pubhtml#">BDO Enhancement Table</a>
                  is what I use for my day to day failstacking.
                </p>

                <p>
                  If you're interested in the math behind it, read the aside and follow the link. Otherwise, just be content that a smart person has used mathematics to determine the optimal failstack count for each enhancement attempt.
                </p>

                <p>
                  A small aside:
                  This chart is based on the probabilities listed in the Korean chart, as well as market prices, and a statistical concept known as "expected value". In plain English, the creator of the chart used math to ask the following question: If I enhance an item at 0 failstacks, how many times can I expect to fail? How much does this cost me in black stones and durability repairs? If I enhance an item at 1 failstack, how many times can I expect to fail? How much does this cost me in failstack cost, black stones, and durability repairs? So on, and so forth - Calculate the "expected value" for every possible failstack level, and then determine the optimal failstack level to have the smallest expected cost.
                </p>

                <p>
                  Use this as a guideline, rather than a strict rule - Going +/- some failstacks is OK. Do take note that your max success rate is at 25 failstacks for +14/+15/PRI, 35 for DUO, and 44 for TRI.
                </p>


                OK, that makes sense.  So, how do I actually build failstacks intentionally?
              </CardText>
            </Card>
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="How to Failstack"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <Card>
              <CardText>
                My method for failstacking is simple:
                - Build a Reblath +14 piece of armor by buying one from the Blacksmith in Velia and enhancing it (if you build any significant failstacks while doing this, USE THE FAILSTACKS!)
                - Use Reblath +14 Armor to build up to 15 failstacks.
                - Use Grunil PRI armor to build from 15 to 30 failstacks
                - Use Grunil DUO armor to build 30+ failstacks.

                This chart from incendar lays out the cheapest enhancements to your desired failstacking level: http://www.incendar.com/failstackoptimizer.php

                Downgrading:
                - You will succeed your failstack enhancements from time to time (Reblath will go from +14 to +15, Grunil will go to DUO or to TRI sometimes).
                - I will usually sell Grunil if it gets to TRI, and save DUO for more failstacking.


                A couple notes:

                - If you have multiple items you are trying  to enhance, use the less enhanced one to failstack for the higher one: For example, enhancing a PRI Grunil helmet, and a PRI Bheg's Gloves (Boss Armor). Start at the recommended 7 FS on the PRI Grunil. If you get up around the recommended 19 FS for attempting Bheg's Glove DUO, STOP enhancing your Grunil, and start enhancing the Bheg's Gloves.  DONT OVER CLICK! FAILSTACKS ARE VERY VALUABLE AND DIFFICULT TO BUILD.

                Let me hammer home that point:
                - BE DISCIPLINED ABOUT YOUR FAILSTACKS. If you go way above the recommended failstacks for a given enhancement, save that failstack for another enhancement attempt.  The definition of "way above" varies - Generally, I don't go above the max enhancement for a given level (25 for PRI, 35 for DUO, 44 for TRI).
              </CardText>
            </Card>

          </CardText>
        </Card>


        <Card>
          <CardText>
            At this point, you've made it through the basics. Read on to learn about some other aspects of enhancing & failstacking.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Enhancing Accessories"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            The mechanics for enhancing accessories are much the same as enhancing other gear, with two key differences.
            - Enhancing accessories requires a base version of the accessory you are enhancing
            - Failed enhancement attempts will always destroy both the item you are trying to enhance, as well as the reagent (the base copy of the accessory).
            - Because of this failure rate, I often use cron stones for accessory enhancement. Cron stones protect your target item from getting destroyed upon a failed enhancement.

          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Enhancing Armor/Weapons Past +15"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            Enhancing past +15 is much the same as enhancing up to +15, with two key differences:
            - It uses more expenses Concentrated Stones, which can be crafted by melting a Shard with two Black Stones.
            - If you fail attempting TRI (+18), TET (+19), or PEN (+20), your item will actually downgrade (A failed DUO to TRI attempt will put the item at PRI). Ouch!
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="How do I get Enhancing Resources?"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            Black Stones:
            - Off the Marketplace (Can be a pain in the ass)
            - Grinding (There are often black stone drop events)
            - Turning in hunter's seals (You get these from quests, and important Ancient Relic Scroll runs)

            Concentrated Stones:
            - Off the Marketplace (usually a pain in the ass)
            - Drops from Gathering and Farming (Life Skilling)

            Memory Fragments:
            - Off the Marketplace (often available, but expensive)
            - Ancient Relic Scroll groups
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Force Enhancing"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            - You'll see next to the "Enhancement button" a "Force" option. Forcing an enhancement guarantees success, but costs many more stones than a normal enhancement attempt would, and also costs a lot of durability. I never Force enhance.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Artisan's Memories (pay2win)"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <ul>
              <li>
                Artisan's memories can be bought on the pearl shop and are IMO one of the best ways to pay2win your way into this game (you can also rack up quite a bill buying them, be careful).
              </li>
              <li>
                Artisan's memories multiply by 3x the amount of durability you recover when repairing.  You can use them by putting them in your inventory and checking the "Artisan's Memory?" box when you are repairing max durability.
              </li>
              <li>
                If you are stacked in real life, consider using them with memory fragments on boss gear. Memory Fragments cost 750k and normally repair 1 max durability on boss gear. With an artisan's memory, a single memory fragment will repair 3 max durability, saving you 1.5mil.  If we say an artisan memory costs ~ $0.40, that comes out to a value of 3.75mil/$1.00. (Compare to a pearl shop item that costs $30 and sells for ~25mil: This comes out to ~0.83mil/$1.00. Artisan's Memories are the clear winner.)
              </li>
              <li>
                If you're less stacked, it's still very effective to use artisan's memories repairing blue gear: Consider that a Liverto costs $100mil,
              </li>
              <li>
                <strong>TL;DR: p2w</strong>
              </li>
            </ul>
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Hoooo Boy, Anything Else?"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <ul>
              <li>
                Adjust your mental perception of failing enhancements. It's important to look at failed enhancement not as lost value, but future gains - You are building a BIGGER, BETTER stack to be used next time on a different item, or to have a higher success rate on the same item.
              </li>
              <li>
                Be wary of tinfoil. Lots of people have crazy enhancing ideas. To toot my own horn, my methods are based on people who have used mathematics and data, so IMO less subjective and more concrete than most of the tinfoil out there.
              </li>
              <li>
                Ask Questions: I'm happy to be a resource for you. Hop on <a target="_blank" href="https://twitch.tv/classic4u">twitch.tv/classic4u</a> or in my <a target="_blank" href="https://discord.gg/D22h5Mv">discord</a>, or tweet me at <a target="_blank" src="https://twitter.com/classic4uTV">@classic4uTV</a>.
                If not me, join a guild, post on the community forums, or ask in server chat. For every troll there's a helpful human bean.
              </li>
            </ul>
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Enhancing Links"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <Card>
              <CardText>
                <ul>
                  <li>
                    <a target="_blank" href="">BDO Enhancement Table</a>
                    <a target="_blank" href="">Incendar's Failstacking Optimization Guide</a>
                  </li>
                </ul>
              </CardText>
            </Card>
          </CardText>
        </Card>
      </CardText>
    </Card>
  </section>
)

export default Enhancing
