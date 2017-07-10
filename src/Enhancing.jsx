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
                    <TableRowColumn style={ { width: '210px' } }>Alpha Release</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
            <p>
              <strong>Hi folks. </strong>
              I'm classic4u.
              I stream over at <a target="_blank" href="https://twitch.tv/classic4u">twitch.tv/classic4u</a>.
              I've baked up this guide to be a clear, thorough, yet concise (as possible) introduction to enhancing & failstacking.
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
                  Enhancing is how you raise your Attack Power (<strong>AP</strong>), Awakened Attack Power (<strong>AAP</strong>), and Defense Power (<strong>DP</strong>), as well as your secondary stats (<strong>Accuracy</strong>, <strong>evasion</strong>, etc.).
                </p>
                <p>
                  For example, a <strong>Rosar's Gauntlet</strong> goes from <strong>17 ~ 22 AP</strong> at <strong>+0</strong>, to <strong>69 ~ 74 AP</strong> at <strong>+15</strong>, to <strong>97 ~ 102</strong> at <strong>TRI</strong>!
                </p>
                <p>
                  I use <a target="_blank" href="http://bdoplanner.com">bdoplanner.com</a> and <a target="_blank" href="http://bddatabase.net">bddatabase.net</a> to test out different builds and enhancement levels.
                </p>
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
                  You'll need <strong>Black Stone (Armor)</strong> or <strong>Black Stone (Weapon)</strong> to enhance armor and weapons up to <strong>+15</strong>, respectively. Enhancing accessories is covered in the "Enhancing Accessories" section.
                </p>
                <p>
                  To enhance, get to the black spirit enhancing menu: Hit "," or click on the Black Spirit, click "Enhance";
                  alternatively you can right click a black stone to go straight to the enhancing menu.
                </p>
                <p>
                  It is safe to enhance armor up to <strong>+5</strong> enhancement level, and weapons up to <strong>+7</strong>.
                  After that, each enhancement attempt has a chance to fail.  If you fail an enhancement attempt, you lose the stone, and the max durability of your equipment goes down.
                </p>
                <p>
                  Once the maximum durability of an item drops below 20 durability, it can no longer be enhanced. It needs to be <strong>repaired</strong>.
                </p>
              </CardText>
            </Card>
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Repairing Max Durability"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <Card>
              <CardText>
                <p>
                  As you start getting to higher enhancement levels, you will fail more often.
                  At some point, you are going to need to repair the maximum durability of your items.
                </p>
                <p>
                  To repair max durability, go to the blacksmith, and click "Repair". Then click "Recover Maximum Durability".
                </p>
                <p>
                  Right click the item you are repairing to stick it on the left side of the UI.
                </p>
                <p>
                  Right click the item you are using to repair to stick it on the right side of the UI, then hit recover max durability.
                  The "continuous" button will do the same repair with as many reagents as you have.
                </p>
                <p>
                  There are exactly two items that can be used to repair any given item:
                </p>
                <ul>
                  <li>
                    A +0 version of the item you are repairing.
                    For example, a PRI Grunil Gloves can be repaired with a Grunil Gloves.
                    Using a base item will repair 10 durability.
                  </li>
                  <li>
                    A <strong>Memory Fragment</strong>. Memory fragments repair an amount based on the rarity (white, green, blue, yellow) of item:
                    5 max durability for green, 2 max durability for blue, and 1 max durability for yellow.
                  </li>
                </ul>
                <p>
                  <i>For all green gear, it is always cheaper to use the base item to repair.
                  For blue and yellow items, it is always cheaper to use memory fragments to repair.</i>
                </p>
                <p>
                  <strong>Ultimate</strong> versions of green weapons should still be repaired by using the base version of an item. Note that if you upgrade a blue Awakened weapon to <strong>Ultimate</strong>, a memory fragment will repair 1 durability, since the weapon is now a yellow weapon.
                </p>
                <p>
                  The checkbox for "artisan's memory" allows you to use the p2w item <strong>Artisan's Memory</strong> with your repair.
                  Artisan's Memories are covered in a below section.
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
                <p>
                  As noted above, enhancements begin to have a chance to fail as the item goes up in enhancement level. Once you fail an enhancement, notice that the <strong>Enhancement Chance</strong> goes up, say, from +0 to +1.
                </p>
                <p>
                  Each <strong>Enhancement Chance</strong> + is known as a failstack (FS). Each failstack you have increases your probability of successfully enhancing the item.
                </p>
                <p>
                  Exactly how much, no one really knows-
                  Most of the math I have seen is based off this supposedly datamined enhancement chart from our Korean Overlords:
                </p>
                <Card>
                  <CardHeader
                    title="Korean Enhancing Success Rate Chart"
                    actAsExpander={true}
                    showExpandableButton={true}
                  />
                  <CardText expandable={true}>
                    <img src="kr-failstacking-chart.png" style={{maxWidth: "100%", height: 'auto'}}/>
                  </CardText>
                </Card>
                <p>
                  The <a target="_blank" href="https://docs.google.com/spreadsheets/d/1WzAeIFslcWhZ-TudUTrvt4S6ejGF8Uo5FwVqNivfHK0/pubhtml#">BDO Enhancement Table</a> is what I use for my day to day failstacking.
                </p>
                <p>
                  If you're interested in the math behind it, read the aside and follow the link.
                  Otherwise, just be content that a smart person has used mathematics to determine the optimal failstack count for each enhancement attempt.
                </p>
                <Card>
                  <CardHeader
                    title="ELI5 aside on probability:"
                    actAsExpander={true}
                    showExpandableButton={true}
                  />
                  <CardText expandable={true}>
                    <p>
                      This chart is based on the probabilities listed in the Korean chart, as well as market prices, and a statistical concept known as "expected value".
                    </p>
                    <p>
                      In plain English, the creator of the chart used math to ask the following question:
                    </p>
                    <p>
                      If I enhance an item at 0 failstacks, how many times can I expect to fail?
                      How much does this cost me in black stones and durability repairs?
                    </p>
                    <p>
                      If I enhance an item at 1 failstack, how many times can I expect to fail?
                      How much does this cost me in failstack cost, black stones, and durability repairs?
                    </p>
                    <p>
                      So on, and so forth - Calculate the "expected value" for every possible failstack level, and then determine the optimal failstack level (the one with the smallest expected cost).
                    </p>
                    <p>
                      The creator of the chart <a target="_blank" href="http://forum.blackdesertonline.com/index.php?/topic/115179-enhancement-failstack-costsstrategies/">posted on the old forums</a> and you can follow his links to more posts on math, or download the actual code.
                    </p>
                  </CardText>
                </Card>
                <p>
                  Use the table as a guideline, rather than a strict rule - Going +/- some failstacks is OK. Do take note that your max success rate is at 25 failstacks for +14/+15/PRI, 35 for <strong>DUO</strong>, and 44 for TRI. I never go above these cutoffs.
                </p>
                <p>
                  OK, that makes sense.  So, how do I actually build failstacks intentionally?
                </p>
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
                <p>
                  My method for failstacking is simple:
                </p>
                <ul>
                  <li>
                    Build a Reblath +14 piece of armor by buying one from the Blacksmith in Velia and enhancing it (if you build any significant failstacks while doing this, USE THE FAILSTACKS!)
                  </li>
                  <li>
                    Use Reblath +14 Armor to build up to 15 failstacks.
                  </li>
                  <li>
                    Use Grunil PRI armor to build from 15 to 30 failstacks
                  </li>
                  <li>
                    Use Grunil DUO armor to build 30+ failstacks.
                  </li>
                </ul>
                <p>
                  This chart from Incendar lays out the cheapest enhancements to your desired failstacking level: http://www.incendar.com/failstackoptimizer.php
                </p>


                <p>Downgrading:</p>
                <ul>
                  <li>
                    You will succeed your failstack enhancements from time to time (Reblath will go from +14 to +15, Grunil will go to DUO or to TRI sometimes).
                  </li>
                  <li>
                    I will usually sell Grunil if it gets to TRI, and save DUO for more failstacking.
                  </li>
                  <li>
                    For Reblath, I use the negative karma downgrading method to go from +15 back to +14 so i can reuse the Reblath.
                  </li>
                </ul>
                <Card>
                  <CardHeader
                    title="Downgrading with a Negative Karma Alt"
                    actAsExpander={true}
                    showExpandableButton={true}
                  />
                  <CardText expandable={true}>
                    <p>When your character has negative karma, your equipment has a chance to downgrade on every death.</p>
                    <p>The idea here is to create a low level alt with negative karma who can die over and over again, to easily downgrade Reblath.</p>
                    <p>The alt should be less than level 10 so it can respawn immediately wherever it dies; it should have more than -500 karma so guards in town will murder it.</p>

                    <p>Creating the negative karma alt:</p>
                    <ol>
                      <li>Make an alt, level it to 6.</li>
                      <li>
                        Use <a target="_blank" href="http://www.somethinglovely.net/bdo/#horses">http://www.somethinglovely.net</a> to find a place where horses spawn.
                      </li>
                      <li>
                        Kill two horses, one at a time, by running them into a rock and beating them repeatedly. You kill two so your karma is negative to the point that the guards in towns will attack you.
                      </li>
                    </ol>
                    <p>And that's it. Now, you can put your +15 Reblath gear on your negative karma alt, and suicide to guards until the item downgrades.</p>
                  </CardText>
                </Card>
                <p>A couple notes:</p>
                <ul>
                  <li>
                    If you have multiple items you are trying  to enhance, use the less enhanced one to failstack for the higher one: For example, enhancing a PRI Grunil helmet, and a PRI Bheg's Gloves (Boss Armor). Start at the recommended 7 FS on the PRI Grunil. If you get up around the recommended 19 FS for attempting Bheg's Glove DUO, STOP enhancing your Grunil, and start enhancing the Bheg's Gloves.  DONT OVER CLICK! FAILSTACKS ARE VERY VALUABLE AND DIFFICULT TO BUILD.
                  </li>
                </ul>

                <p>Let me hammer home that point:</p>
                <ul>
                  <li>
                    BE DISCIPLINED ABOUT YOUR FAILSTACKS. If you go way above the recommended failstacks for a given enhancement, save that failstack for another enhancement attempt.  The definition of "way above" varies - Generally, I don't go above the max failstack bonus (<strong>+25</strong> for <strong>PRI</strong>, <strong>+35</strong> for <strong>DUO</strong>, <strong>+44</strong> for <strong>TRI</strong>).
                  </li>
                </ul>
              </CardText>
            </Card>
          </CardText>
        </Card>
        <Card>
          <CardText>
            <p>
              At this point, you've made it through the basics. Read on to learn about some other aspects of enhancing & failstacking.
            </p>
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Enhancing Accessories"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <p>
              The mechanics for enhancing accessories are much the same as enhancing other gear, with a few key differences:
            </p>
            <ul>
              <li>
                Enhancing accessories requires a base version of the accessory you are enhancing
              </li>
              <li>
                Failed enhancement attempts will always destroy both the item you are trying to enhance, as well as the reagent (the base copy of the accessory).
              </li>
              <li>
                Accessories never have to be repaired.
              </li>
            </ul>
            <p>
              Because of the pain of failing accessory enhancements, I often use <strong>Cron Stone</strong>s for PRI/DUO enhancement attempts. <strong>Cron Stone</strong>s protect your target item from getting destroyed upon a failed enhancement.
            </p>
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Enhancing Armor/Weapons Past +15"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <p>Enhancing past <strong>+15</strong> is much the same as enhancing up to <strong>+15</strong>, with two key differences:</p>
            <ul>
              <li>
                It uses more expenses Concentrated Stones (~2.25mil for <strong>Concentrated Magical Black Stone (Armor)</strong>, ~4mil for <strong>Concentrated Magical Black Stone (Weapon)</strong>)
              </li>
              <li>
                If you fail attempting <strong>TRI</strong> (+18), <strong>TET</strong> (+19), or <strong>PEN</strong> (+20), your item will actually downgrade (A failed <strong>DUO</strong> to <strong>TRI</strong> attempt will put the item at <strong>PRI</strong>). Ouch!
              </li>
            </ul>
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Where do I get Enhancing Resources?"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <p>
              Black Stones:
            </p>
            <ul>
              <li>
                Off the Marketplace (Can be a pain in the ass)
              </li>
              <li>
                Grinding (There are often black stone drop events)
              </li>
              <li>
                Turning in <strong>Hunter's Seal</strong>s (You get these primarily from doing Ancient Relic Crystal Scrolls, much moneyz from those)
              </li>
            </ul>
            <p>
              Concentrated Stones:
            </p>
            <ul>
              <li>
                Off the Marketplace (usually a pain in the ass)
              </li>
              <li>
                The precursors drop from Gathering and Farming (<strong>Hard Black Crystal Shard</strong>, <strong>Sharp Black Crystal Shard</strong>)
              </li>
            </ul>
            <p>
              Memory Fragments:
            </p>
            <ul>
              <li>
                Off the Marketplace
              </li>
              <li>
                <strong>Ancient Relic Crystal Scroll</strong> groups
              </li>
            </ul>
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Force Enhancing"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <p>
              You'll see next to the "Enhancement" button a "Force" option.
              Forcing an enhancement guarantees success, but costs many more stones than a normal enhancement attempt would, and also costs a lot of max durability.
            </p>
            <p>
              I never Force enhance.
            </p>
            <p>
              If you can't take the heat, get out of the kitchen.
            </p>
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
                If you are stacked in real life, consider using them with memory fragments on boss gear. <strong>Memory Fragment</strong>s cost 750k and normally repair 1 max durability on boss gear. With an artisan's memory, a single memory fragment will repair 3 max durability, saving you 1.5mil.  If we say an artisan memory costs ~ $0.40, that comes out to a value of 3.75mil/$1.00. (Compare to a pearl shop item that costs $30 and sells for ~25mil: This comes out to ~0.83mil/$1.00. Artisan's Memories are the clear winner.)
              </li>
              <li>
                If you're less stacked, it's still very effective to use artisan's memories repairing blue gear: Consider that a Liverto costs $100mil,
              </li>
              <li>
                <strong>TL;DR: p2w, greatly speed up enhancing gainz</strong>
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
                    <a target="_blank" href="https://docs.google.com/spreadsheets/d/1WzAeIFslcWhZ-TudUTrvt4S6ejGF8Uo5FwVqNivfHK0/pubhtml#">BDO Enhancement Table</a>
                  </li>
                  <li>
                    <a target="_blank" href="http://www.incendar.com/failstackoptimizer.php">Incendar's Failstack Optimizer</a>
                  </li>
                  <li>
                    <a target="_blank" href="http://bddatabase.net">bddatabase.net</a>
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
