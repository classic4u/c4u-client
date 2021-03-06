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
  TableRowColumn
} from 'material-ui'
import React from 'react'
import { OutboundLink } from 'react-ga'

// TODO: Links aren't showing the hover hand when you hover over them.
const Setup = () => (
  <section>
    <Card>
      <CardTitle title={"Setup"} />
      <CardText>
        Disclaimer:  All the links on this page are Amazon Affiliate links, meaning I get a kickback from each purchase you make off the link.  Amazon usually has competitive prices and good shipping/return policies, but I'd also recommend shopping around for cheaper! (Newegg is my other go-to).
      </CardText>
    </Card>
    <Card>
      <CardHeader
        title={"PC"}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <Card>
          <CardHeader
            title={"CPU"}
            subtitle={<OutboundLink eventLabel="Setup - CPU" target="_blank" to="https://www.amazon.com/gp/product/B01MXSI216/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01MXSI216&linkCode=as2&tag=c4u02-20&linkId=c8f484a122ceb5a24848e7d475cddd89">Intel i7-7700k</OutboundLink>}
          />
          <CardText>
            Pretty much the creme-de-la-creme of quad-core processors at the moment.  I was considering changing to a processor with more cores for better gaming and streaming on the same machine (Ryzen or 6950x?), but either of those would have required purchasing a new motherboard too (With the i7-7700k I can use my z170 I've had for a while).
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={"CPU Cooler"}
            subtitle={<OutboundLink eventLabel="Setup - CPU Cooler" target="_blank" to="https://www.amazon.com/gp/product/B019EXSSBG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B019EXSSBG&linkCode=as2&tag=c4u02-20&linkId=0fbae51a21cec6f4bb7ae1dc6a9a9187">Corsair H100i v2</OutboundLink>}
          />
          <CardText>
            My first foray into liquid cooling.  This thing keeps my overclocked 7700k under 70&deg;C, even at full load.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={"Motherboard"}
            subtitle={<OutboundLink eventLabel="Setup - Motherboard" target="_blank" to="https://www.amazon.com/gp/product/B014W2000Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B014W2000Q&linkCode=as2&tag=c4u02-20&linkId=0ceec665fcc73657fa4f7fa1baaa7407">Gigabyte GA-Z170N-Gaming 5</OutboundLink>}
          />
          <CardText>
            This is a Mini-ITX board I had from a build I did a couple years ago.  Suits my needs, and enough room for a large vidyo card like the 1080 ti.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={"Memory"}
            subtitle={<OutboundLink eventLabel="Setup - Memory" target="_blank" to="https://www.amazon.com/gp/product/B01AG9EZ3M/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01AG9EZ3M&linkCode=as2&tag=c4u02-20&linkId=3883d14cb8bb8991c5a07fda09e4e884">Ballistix Sport LT 16GB DDR4-2400</OutboundLink>}
          />
          <CardText>
            RAM is RAM for the most part. Also from an older build, it was on the higher end of speeds back then, still seems to get the job done.  From what I've seen, higher RAM speed doesn't make a huge difference in performance.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={"Storage 1"}
            subtitle={<OutboundLink eventLabel="Setup - Storage 1" target="_blank" to="https://www.amazon.com/gp/product/B00OAJ412U/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00OBRFFAS&linkCode=as2&tag=c4u02-20&linkId=f4b070d0f46eeae030c99b557c5ab9fa">Samsung 850 EVO 250GB</OutboundLink>}
          />
          <CardText>
            I'm running a Hackintosh build, which is why I have 2 harddrives. This one is smaller and used on my Windows side - I do all my coding, photo-editing, and music-making on the Mac side.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={"Storage 2"}
            subtitle={<OutboundLink eventLabel="Setup - Storage 2" target="_blank" to="https://www.amazon.com/gp/product/B00OBRFFAS/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00OBRFFAS&linkCode=as2&tag=c4u02-20&linkId=f4b070d0f46eeae030c99b557c5ab9fa">Samsung 850 EVO 1TB</OutboundLink>}
          />
          <CardText>
            1TB for the Mac side, where I've got all my photos, music files, etc.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={"Graphics Card"}
            subtitle={<OutboundLink eventLabel="Setup - Graphics Card" target="_blank" to="https://www.amazon.com/gp/product/B06Y13N2B6/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06Y13N2B6&linkCode=as2&tag=c4u02-20&linkId=708c07695249fb53a9decab463e7fd6a">EVGA GeForce GTX 1080 Ti SC2 GAMING</OutboundLink>}
          />
          <CardText>
            This card is a beast.  If you have the money, it's money well-spent.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={"Case"}
            subtitle={<OutboundLink eventLabel="Setup - Case" target="_blank" to="https://www.amazon.com/gp/product/B008BZYJ6W/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008BZYJ6W&linkCode=as2&tag=c4u02-20&linkId=205eeda89b4a07f82ae02a5fe7aaf420">BitFenix Prodigy Mini-ITX</OutboundLink>}
          />
          <CardText>
            I love this little case.  It's not super flashy, but is compact and has the perfect amount of space for a Mini-ITX build with all the bells and whistles a gamer needs (including space for a long video card, a 240mm radiator, multiple 120mm case fans, side USB and headphone ports).
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={"Power Supply"}
            subtitle={<OutboundLink eventLabel="Setup - Power Supply" target="_blank" to="https://www.amazon.com/gp/product/B00UVN20UO/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00UVN20UO&linkCode=as2&tag=c4u02-20&linkId=18ac188d5bdc223e676fef4dcaf2ee93">EVGA SuperNOVA 550 GS</OutboundLink>}
          />
          <CardText>
            EVGA SuperNOVA is pretty much the gold standard (heh heh) in PSUs.  I bought this back when I was rocking an i5 and a GTX 970, but it has just enough juice for my i7-7700k and the 1080ti.
          </CardText>
        </Card>
      </CardText>
    </Card>
    <Card>
      <CardHeader
        title={"Peripherals"}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <Card>
          <CardHeader
            title={"Gaming Monitor"}
            subtitle={<OutboundLink eventLabel="Setup - Gaming Monitor" target="_blank" to="https://www.amazon.com/gp/product/B0099XBO5E/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0099XBO5E&linkCode=as2&tag=c4u02-20&linkId=ccfede7028f92dd72c87588a81d1cc9e">ASUS VE278H 27"</OutboundLink>}
          />
          <CardText>
            2ms response time. 1080p. I've had this for a while, probably time to upgrade. Got it originally because it has some speakers.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={"Secondary Monitor"}
            subtitle={<OutboundLink eventLabel="Setup - Secondary Monitor" target="_blank" to="https://www.amazon.com/gp/product/B0058UUR6E/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0058UUR6E&linkCode=as2&tag=c4u02-20&linkId=33e6886bb18593d712b4b5a250670a64">ASUS VS248H-P 24"</OutboundLink>}
          />
          <CardText>
            2ms response time. 1080p. No Speakers. I've also had this for a while, gets the job done.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={"Keyboard"}
            subtitle={<OutboundLink eventLabel="Setup - Keyboard" target="_blank" to="https://www.amazon.com/gp/search/ref=as_li_qf_sp_sr_tl?ie=UTF8&tag=c4u02-20&keywords=B00IG3GPC0&index=aps&camp=1789&creative=9325&linkCode=ur2&linkId=6d0a29f3c47684f7cbc352381c449aa3">Razer BlackWidow Tournament Edition</OutboundLink>}
          />
          <CardText>
            Being a programmer, mechanical keyboards are my lifeblood.  I'm a fan of Cherry MX Blues, but the noise is a little much for gaming.  Razer Greens are super similar but make a little less noise.  Perfect.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={"Mouse"}
            subtitle={<OutboundLink eventLabel="Setup - Mouse" target="_blank" to="https://www.amazon.com/gp/product/B00MYTSDU4/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00MYTSDU4&linkCode=as2&tag=c4u02-20&linkId=f658c90b97494c8492f8e71b52ed2006">Razer DeathAdder Chroma</OutboundLink>}
          />
          <CardText>
            I've been rocking the DeathAdder since its inception in 2006.  It fits my hands perfectly.  I could do without the Chroma (don't care for the lights), but the Razer Synapse app allows you to disable them.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={"Mousepad"}
            subtitle={<OutboundLink eventLabel="Setup - Mousepad" target="_blank" to="https://www.amazon.com/gp/product/B001719CMI/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B001719CMI&linkCode=as2&tag=c4u02-20&linkId=c63e48298daeb7438013dc14f8165e4b">Rocketfish Double-Sided Gaming Mouse Pad</OutboundLink>}
          />
          <CardText>
            I have literally had this mousepad for 10+ years.  It is discontinued. They don't make shit like this anymore.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={"Headphones"}
            subtitle={<OutboundLink eventLabel="Setup - Headphones" target="_blank" to="https://www.amazon.com/gp/product/B0042A8CW2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0042A8CW2&linkCode=as2&tag=c4u02-20&linkId=fcc30d110eaef470cf007b77b8f24d16">Sennheiser HD 598 Headphones</OutboundLink>}
          />
          <CardText>
            Solid, not much to say. Nice bass, good range, open-ear style.
          </CardText>
        </Card>
      </CardText>
    </Card>
    <Card>
      <CardHeader
        title={"Streaming Equipment"}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <Card>
          <CardHeader
            title={"Mic"}
            subtitle={<OutboundLink eventLabel="Setup - Mic" target="_blank" to="https://www.amazon.com/gp/product/B0006H92QK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0006H92QK&linkCode=as2&tag=c4u02-20&linkId=6e3ba4e86c33ff957270b1da7c18f10a">Audio-Technica AT2020 Cardioid Condenser Studio Microphone</OutboundLink>}
          />
          <CardText>
            A mid-tier condenser mic. I've had good luck with Audio-Technica equipment in the past, and thus far this guy is getting the job done.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={"USB Audio Interface"}
            subtitle={<OutboundLink eventLabel="Setup - USB Audio Interface" target="_blank" to="https://www.amazon.com/gp/product/B01E6T56CM/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01E6T56CM&linkCode=as2&tag=c4u02-20&linkId=4fd9e65eb931e70a27f183b9114969e8">Focusrite Scarlett Solo (2nd Gen) USB Audio Interface</OutboundLink>}
          />
          <CardText>
            I originally purchased this thing for recording Guitar and Bass. It works quite well and has some nice features like pass-thru monitoring, gain control, etc.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={"Mic Arm"}
            subtitle={<OutboundLink eventLabel="Setup - Mic Arm" target="_blank" to="https://www.amazon.com/gp/product/B00DY1F2CS/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00DY1F2CS&linkCode=as2&tag=c4u02-20&linkId=eb2f24ed317928fa9cb80f582436a82a">NEEWER Adjustable Microphone Suspension Boom Scissor Arm Stand</OutboundLink>}
          />
          <CardText>
            This arm, while cheap, gets the job done. And that's about all I have to say about that.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={"Webcam"}
            subtitle={<OutboundLink eventLabel="Setup - Webcam" target="_blank" to="https://www.amazon.com/gp/product/B006JH8T3S/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B006JH8T3S&linkCode=as2&tag=c4u02-20&linkId=bc38f6665efc64739c38e3af5e748afe">Logitech HD Pro Webcam C920</OutboundLink>}
          />
          <CardText>
            Can record up to 1080p; reasonably priced. I think this is a great choice before you get into really expensive cam setups (such as DSLRs).
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title={"Capture Card"}
            subtitle={<OutboundLink eventLabel="Setup - Capture Card" target="_blank" to="https://www.amazon.com/gp/product/B01DRWCOGA/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01DRWCOGA&linkCode=as2&tag=c4u02-20&linkId=50305955807f542059492ea8da468cb3">Elgato Game Capture HD60 S</OutboundLink>}
          />
          <CardText>
            This is a great capture card if you don't have an extra PCI-E slot, which I don't.  Otherwise go for an onboard card.
          </CardText>
        </Card>
      </CardText>
    </Card>
  </section>
)

export default Setup
