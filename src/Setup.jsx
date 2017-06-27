import {
  Card,
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

const Setup = () => (
  <section>
    <Paper>
      <h2>Setup</h2>
      <Divider />
      <h3>Disclaimer:  All the links on this page are Amazon Affiliate links, meaning I get a kickback from each purchase you make off the link.  Amazon usually has competitive prices and good shipping/return policies, but I'd also recommend shopping around for cheaper! (Newegg is my other go-to).</h3>
    </Paper>
    <Paper>
      <Table>
        <TableHeader displaySelectAll={false}>
          <TableHeaderColumn>PC</TableHeaderColumn>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn>CPU</TableRowColumn>
            <TableRowColumn>
              <a target="_blank" href="https://www.amazon.com/gp/product/B01MXSI216/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01MXSI216&linkCode=as2&tag=c4u02-20&linkId=c8f484a122ceb5a24848e7d475cddd89">Intel i7-7700k</a>
            </TableRowColumn>
            <TableRowColumn>Pretty much the creme-de-la-creme of quad-core processors at the moment.  I was considering changing to a processor with more cores for better gaming and streaming on the same machine (Ryzen or 6950x?), but either of those would have required purchasing a new motherboard too (With the i7-7700k I can use my z170 I've had for a while).  </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>CPU Cooler</TableRowColumn>
            <TableRowColumn>
              <a target="_blank" href="https://www.amazon.com/gp/product/B019EXSSBG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B019EXSSBG&linkCode=as2&tag=c4u02-20&linkId=0fbae51a21cec6f4bb7ae1dc6a9a9187">Corsair H100i v2</a>
            </TableRowColumn>
            <TableRowColumn>My first foray into liquid cooling.  This thing was a breeze to install and works quite well.</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Motherboard</TableRowColumn>
            <TableRowColumn><a target="_blank" href="https://www.amazon.com/gp/product/B014W2000Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B014W2000Q&linkCode=as2&tag=c4u02-20&linkId=0ceec665fcc73657fa4f7fa1baaa7407">Gigabyte GA-Z170N-Gaming 5</a></TableRowColumn>
            <TableRowColumn>This is a Mini-ITX board I had from a build I did a couple years ago.  Suits my needs, and enough room for a </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Memory</TableRowColumn>
            <TableRowColumn><a target="_blank" href="https://www.amazon.com/gp/product/B01AG9EZ3M/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01AG9EZ3M&linkCode=as2&tag=c4u02-20&linkId=3883d14cb8bb8991c5a07fda09e4e884">Ballistix Sport LT 16GB DDR4-2400</a></TableRowColumn>
            <TableRowColumn>RAM is RAM for the most part. Also from an older build, it was on the higher end of speeds back then, still seems to get the job done.  From what I've seen, higher RAM speed doesn't make a huge difference in performance.</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Storage</TableRowColumn>
            <TableRowColumn>Sup</TableRowColumn>
            <TableRowColumn>Sup</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Storage</TableRowColumn>
            <TableRowColumn>Sup</TableRowColumn>
            <TableRowColumn>Sup</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Video Card</TableRowColumn>
            <TableRowColumn><a target="_blank" href="https://www.amazon.com/gp/product/B06Y13N2B6/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06Y13N2B6&linkCode=as2&tag=c4u02-20&linkId=708c07695249fb53a9decab463e7fd6a">EVGA GeForce GTX 1080 Ti SC2 GAMING</a></TableRowColumn>
            <TableRowColumn>This card is a beast.  If you have the money, it's money well-spent.</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Case</TableRowColumn>
            <TableRowColumn><a target="_blank" href="https://www.amazon.com/gp/product/B008BZYJ6W/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008BZYJ6W&linkCode=as2&tag=c4u02-20&linkId=205eeda89b4a07f82ae02a5fe7aaf420">BitFenix Prodigy Mini-ITX</a></TableRowColumn>
            <TableRowColumn>I love this little case.  It's not super flashy, but is compact and has the perfect amount of space for a Mini-ITX build with all the bells and whistles a gamer needs (including space for a long video card, a 240mm radiator, multiple 120mm case fans, side USB and headphone ports).</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Power Supply</TableRowColumn>
            <TableRowColumn><a target="_blank" href="https://www.amazon.com/gp/product/B00UVN20UO/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00UVN20UO&linkCode=as2&tag=c4u02-20&linkId=18ac188d5bdc223e676fef4dcaf2ee93">EVGA SuperNOVA 550 GS</a></TableRowColumn>
            <TableRowColumn>EVGA SuperNOVA is pretty much the gold standard (heh heh) in PSUs.  I bought this back when I was rocking an i5 and a GTX 970, but it has just enough juice for my i7-7700k and the 1080ti.</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Keyboard</TableRowColumn>
            <TableRowColumn><a target="_blank" href="https://www.amazon.com/gp/search/ref=as_li_qf_sp_sr_tl?ie=UTF8&tag=c4u02-20&keywords=B00IG3GPC0&index=aps&camp=1789&creative=9325&linkCode=ur2&linkId=6d0a29f3c47684f7cbc352381c449aa3">Razer BlackWidow Tournament Edition</a></TableRowColumn>
            <TableRowColumn>Being a programmer, mechanical keyboards are my lifeblood.  I'm a fan of Cherry MX Blues, but the noise is a little much for gaming.  Razer Greens are super similar but make a little less noise.  Perfect.</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Mouse</TableRowColumn>
            <TableRowColumn><a target="_blank" href="https://www.amazon.com/gp/product/B00MYTSDU4/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00MYTSDU4&linkCode=as2&tag=c4u02-20&linkId=f658c90b97494c8492f8e71b52ed2006">Razer DeathAdder Chroma</a></TableRowColumn>
            <TableRowColumn>I've been rocking the DeathAdder since its inception in 2012.  It fits my hands perfectly.  I could do without the Chroma, lights are stupid, but the Razer Synapse app allows you to disable them.</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
    <Paper>
      <Table>
        <TableHeader displaySelectAll={false}>
          <TableHeaderColumn>Streaming Equipment</TableHeaderColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>Mic</TableRowColumn>
            <TableRowColumn><a target="_blank" href="https://www.amazon.com/gp/product/B0006H92QK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0006H92QK&linkCode=as2&tag=c4u02-20&linkId=6e3ba4e86c33ff957270b1da7c18f10a">Audio-Technica AT2020 Cardioid Condenser Studio Microphone</a></TableRowColumn>
            <TableRowColumn>This Audio-Technica</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>USB Audio Interface</TableRowColumn>
            <TableRowColumn><a target="_blank" href="https://www.amazon.com/gp/product/B01E6T56CM/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01E6T56CM&linkCode=as2&tag=c4u02-20&linkId=4fd9e65eb931e70a27f183b9114969e8">Focusrite Scarlett Solo (2nd Gen) USB Audio Interface</a></TableRowColumn>
            <TableRowColumn>Blah Blah Blah</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Mic Arm</TableRowColumn>
            <TableRowColumn><a target="_blank" href="https://www.amazon.com/gp/product/B00DY1F2CS/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00DY1F2CS&linkCode=as2&tag=c4u02-20&linkId=eb2f24ed317928fa9cb80f582436a82a">NEEWER Adjustable Microphone Suspension Boom Scissor Arm Stand</a></TableRowColumn>
            <TableRowColumn>Of all my equipment, this is the biggest piece of shit.  It cost me about $15, and gets the job done.</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Webcam</TableRowColumn>
            <TableRowColumn><a target="_blank" href="https://www.amazon.com/gp/product/B006JH8T3S/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B006JH8T3S&linkCode=as2&tag=c4u02-20&linkId=bc38f6665efc64739c38e3af5e748afe">Logitech HD Pro Webcam C920</a></TableRowColumn>
            <TableRowColumn></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Capture Card</TableRowColumn>
            <TableRowColumn><a target="_blank" href="https://www.amazon.com/gp/product/B01DRWCOGA/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01DRWCOGA&linkCode=as2&tag=c4u02-20&linkId=50305955807f542059492ea8da468cb3">Elgato Game Capture HD60 S</a></TableRowColumn>
            <TableRowColumn>This is a great capture card if you don't have an extra PCI-E slot, which I don't.  Otherwise go for an onboard card.</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  </section>
)

export default Setup
