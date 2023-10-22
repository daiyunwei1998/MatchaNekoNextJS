'use client'

import React from 'react';
import { Timeline,Card } from 'antd';
import FFIcon from '../components/FFIcon';
import { Anchor, Row, Col } from 'antd';
import { Image } from 'antd';
import Script from 'next/script'

import milestonesStyles from './milestonesStyles.module.css'

const { Meta } = Card;
const titleStyle = {
  color: '#ffaebc', // Change the color to your desired color
};


export default function Milestones() {
  return (
    <div>
    <Script src="https://img.finalfantasyxiv.com/lds/pc/global/js/eorzeadb/loader.js?v2"></Script>
    
    <Row>
        <Col span={18}>
    <Timeline
    items={[
      {
        children:  
        <Card
        id = "new-adventurer"
        hoverable
        style={{ width: 256 }}
        cover={
          <Image 
            alt="My first appearance as a catboy" 
            src="/images/milestones/catboy.png" 
            width={256}
            height={256}
          />
        }
      >
        <Meta title={<span style={titleStyle}>New adventurer</span>} description="2020" />
        <p>抹茶猫@沃仙曦染</p>
        <p>Portrait by Liasa@神意之地</p>

      </Card>,
      },
      {
        children:      
        <Card
        id="the-epic-of-alexander"
        hoverable
        style={{ width: 500 }}
        cover={
          <Image 
            alt="The Epic of Alexander (Ultimate)" 
            src="/images/milestones/TEA1.png" 
            width={500}
            height={282}
          />
        }
      >
        <Meta title={<span style={titleStyle}>The Epic of Alexander (Ultimate)</span>} description="2021/12/20 Patch 5.5"  />
        <p>
        <FFIcon type="DRK"/> 穂積陳重<br/>
        <FFIcon type="PLD"/> <strong style={{color:"#ffaebc"}}>抹茶猫</strong><br/>
        <FFIcon type="WHM"/> Leko<br/>
        <FFIcon type="AST"/> 伊弗列姆<br/>
        <FFIcon type="SAM"/> 旋律·火花<br/>
        <FFIcon type="RDM"/> 绿豆冰沙小花<br/>
        <FFIcon type="MCH"/> 麦田里的囚人<br/>
        <FFIcon type="SMN"/> 克莉娜
        </p>
        <p>Gpose by 克莉娜</p>
        {<a href="https://www.fflogs.com/character/cn/%E6%B2%83%E4%BB%99%E6%9B%A6%E6%9F%93/%e6%8a%b9%e8%8c%b6%e7%8c%ab?zone=38#zone=32&boss=1050" target="_blank">View FFlogs</a>}
      </Card>,
      },
      {
        children:  <Card
        id="to-elemental"
        hoverable
        style={{ width: 500 }}
        cover={
          <Image 
            alt="Matcha Neko in elemental server" 
            src="/images/milestones/WoL.png" 
            width={500}
            height={282}
          />
        }
      >
        <Meta title={<span style={titleStyle}>To Elemental</span>} description="2022/5/3"  />
        <p>I bacame <strong style={{color:"#ffaebc"}}>Matcha Neko @ Typhon</strong></p>
        {<a href="https://na.finalfantasyxiv.com/lodestone/character/40688653/" target="_blank">View Lodestone</a>}
      </Card>,
      },
      {
        children: <Card
        id="the-unending-coil"
        hoverable
        style={{ width: 500 }}
        cover={
          <Image 
            alt="The Unending Coil of Bahamut (Ultimate)" 
            src="/images/milestones/UCoB.png" 
            width={500}
            height={282}
          />
        }
      >
        <Meta title={<span style={titleStyle}>The Unending Coil of Bahamut (Ultimate)</span>} description="2022/5/22 Patch 6.1"  />
        <p>
        <FFIcon type="GNB"/> Hot Cappuccino<br/>
        <FFIcon type="WAR"/> Asore Producer<br/>
        <FFIcon type="AST"/> Kotoha Swallow<br/>
        <FFIcon type="SCH"/> Quia Aquette<br/>
        <FFIcon type="NIN"/> Khaleesi Moone<br/>
        <FFIcon type="PLD"/> <strong style={{color:"#ffaebc"}}>Matcha Neko</strong><br/>
        <FFIcon type="MCH"/> Onion Gdiva<br/>
        <FFIcon type="SMN"/> Hana Kagerou
        </p>
        <p>Gpose by Quia Aquette</p>
        {<a href="https://www.fflogs.com/character/id/17514901#zone=43&partition=-2&boss=1060" target="_blank">View FFlogs</a>}
      </Card>,
      },
      {
        children: <Card
        id="second-run-of-tea"
        hoverable
        style={{ width: 500 }}
        cover={
          <Image 
            alt="My second run of TEA" 
            src="/images/milestones/TEA2.png" 
            width={500}
            height={282}
          />
        }
      >
        <Meta title={<span style={titleStyle}>The Epic of Alexander (Ultimate)</span>} description="2022/7/17 Patch 6.1"  />
        <p>
        <FFIcon type="WAR"/> Rexia Phese<br/>
        <FFIcon type="GNB"/> <strong style={{color:"#ffaebc"}}>Matcha Neko</strong><br/>
        <FFIcon type="AST"/> Samuel Sung<br/>
        <FFIcon type="SGE"/> Rokuru Kirisame<br/>
        <FFIcon type="SAM"/> Isana Tigger<br/>
        <FFIcon type="BLM"/> Sekkar Miller<br/>
        <FFIcon type="BRD"/> Reno Lowitz<br/>
        <FFIcon type="DNC"/> Aira Aone
        </p>
        <p>Gpose by Quia Aquette</p>
        {<a href="https://www.fflogs.com/character/id/17514901#zone=43&boss=1062&partition=7" target="_blank">View FFlogs</a>}
        <br></br>
        {<a href="https://www.youtube.com/watch?v=AnXAHW9MaJs&ab_channel=MatchaNeko" target="_blank">View PoV</a>}
      </Card>,
      },
      {
        children: <Card
        id="the-weapons-refrain"
        hoverable
        style={{ width: 500 }}
        cover={
          <Image 
            alt="The Weapon's Refrain (Ultimate)" 
            src="/images/milestones/UWU.png" 
            width={500}
            height={282}
          />
        }
      >
        <Meta title={<span style={titleStyle}>The Weapon&apos;s Refrain (Ultimate)</span>} description="2022/8/14 Patch 6.1"  />
        <p>
          <FFIcon type="WAR"/> Wind Noname<br/>
          <FFIcon type="PLD"/> <strong style={{color:"#ffaebc"}}>Matcha Neko</strong><br/>
          <FFIcon type="WHM"/> Litan Bellveil<br/>
          <FFIcon type="SCH"/> Ui Ha<br/>
          <FFIcon type="SAM"/> Talon Wakuwaku<br/>
          <FFIcon type="NIN"/> Dodo Lee<br/>
          <FFIcon type="MCH"/> Explooosive Raaay<br/>
          <FFIcon type="SMN"/> Shibusaka Yun
        </p>
        <p>Gpose by Litan Bellveil @Aegis</p>
        {<a href="https://www.fflogs.com/character/id/17514901#zone=43&boss=1061" target="_blank">View FFlogs</a>}
        <br></br>
        {<a href="https://youtu.be/KliZMKf4NQw" target="_blank">View First Clear PoV</a>}
        <br></br>
        {<a href="https://youtu.be/LEZY_noUbXw" target="_blank">View Farming PoV</a>}
      </Card>,
      },
      {
        children: <Card
        id="the-necromancer"
        hoverable
        style={{ width: 256 }}
        cover={
          <Image 
            alt="The Necromancer" 
            src="/images/milestones/necromancer_score.png" 
            width={256}
            height={256}
          />
        }
      >
        <Meta title={<span style={titleStyle}>The Necromancer</span>} description="2022/9/18"  />
        The Palace of the Dead floor 0-200 solo with machinist.
        <br></br>
        <a href="https://na.finalfantasyxiv.com/lodestone/playguide/db/achievement/bf25fe273b9/" target="_blank"  className="eorzeadb_link">View Achievement</a>
        <br></br>
        {<a href="https://www.youtube.com/watch?v=J3idW15l9us&t=6s&ab_channel=MatchaNeko" target="_blank">MCH 170-180</a>}
        <br></br>
        {<a href="https://www.youtube.com/watch?v=xLX-ntCxv_0&ab_channel=MatchaNeko" target="_blank">MCH 180-190</a>}
        <br></br>
        {<a href="https://www.youtube.com/watch?v=js07n0Kq5_s&ab_channel=MatchaNeko" target="_blank">MCH 190-200</a>}
      </Card>,
      },
      {
        children: <Card
        id="lone-hero"
        hoverable
        style={{ width: 256 }}
        cover={
          <Image 
            alt="Lone hero" 
            src="/images/milestones/lonehero_score.png" 
            width={256}
            height={256}
          />
        }
      >
        <Meta title={<span style={titleStyle}>Lone Hero</span>} description="2022/9/22"  />
        Heaven on high solo with gunbreaker.
        <br></br>
        <a href="https://na.finalfantasyxiv.com/lodestone/playguide/db/achievement/8e23a1d733e/" target="_blank" className="eorzeadb_link">View Achivement</a>
      </Card>,
      },
      {
        children: <Card
        id="dragonsongs-reprise"
        hoverable
        style={{ width: 500 }}
        cover={
          <Image 
            alt="Dragonsong's Reprise (Ultimate)" 
            src="/images/milestones/DSR.png" 
            width={500}
            height={282}
          />
        }
      >
        <Meta title={<span style={titleStyle}>Dragonsong&apos;s Reprise (Ultimate)</span>} description="2023/1/10"  />
        <p>
          <FFIcon type="DRK"/> Yoyo Adsl<br/>
          <FFIcon type="PLD"/> <strong style={{color:"#ffaebc"}}>Matcha Neko</strong><br/>
          <FFIcon type="WHM"/> Akari Kurosawa<br/>
          <FFIcon type="SGE"/> Akira Rune<br/>
          <FFIcon type="SAM"/> Yonah Belzerg<br/>
          <FFIcon type="NIN"/> Alainne Ciel<br/>
          <FFIcon type="MCH"/> Nirvash Zero<br/>
          <FFIcon type="RDM"/> Charlotte Arashiniji<br/>
          Special Thanks <FFIcon type="RDM"/> Canis Ares @ Aegis
        </p>
        <p>Gpose by Akira Rune @Aegis</p>
        {<a href="https://www.fflogs.com/character/id/17514901#zone=45&boss=1065" target="_blank">View FFlogs</a>}
        <br></br>
        {<a href="https://youtu.be/O0L9y35wWYk" target="_blank">View First Clear PoV</a>}
      </Card>,
      },
      {
        children: <Card
        id="eureka-orthos-solo"
        hoverable
        style={{ width: 256 }}
        cover={
          <Image 
            alt="Eureka Orthos Solo" 
            src="/images/milestones/eo_score.png" 
            width={256}
            height={256}
          />
        }
      >
        <Meta title={<span style={titleStyle}>Once and Future Queen</span>} description="2023/9/3"  />
      
        Eureka Orthos solo with MCH.
        <br></br>
        <a href="https://na.finalfantasyxiv.com/lodestone/playguide/db/achievement/32aeb56b47a/" target="_blank" className="eorzeadb_link">View Achievement</a>
        <br></br>
        {<a href="https://youtu.be/CkDzm3MiuFI" target="_blank">MCH 71-80</a>}
        <br></br>
        {<a href="https://youtu.be/brAfN1ZLRHE" target="_blank">MCH 81-90</a>}
        <br></br>
        {<a href="https://youtu.be/cRse2bn943w" target="_blank">MCH 91-100</a>}
      </Card>,
      },
    ]}
  />

</Col>
        <Col span={6}>
   <Anchor 
   className={milestonesStyles.anchor}
   affix={false} 
   style={{position:'fixed'}}
   items= {[
    {
        key: 'new-adventurer',
        href: '#new-adventurer',
        title: <p style={{margin: 0 }}><FFIcon type="Sprout"/> New Adventurer</p>,

    },
    {
        key: 'the-epic-of-alexander',
        href: '#the-epic-of-alexander',
        title: <p style={{margin: 0 }}><FFIcon type="HighEndDuty"/> The Epic of Alexander (Ultimate)</p>,
    },
    {
        key: 'to-elemental',
        href: '#to-elemental',
        title: <p style={{margin: 0 }}><FFIcon type="Returner"/> To Elemental</p>,
    
    },
    {
        key: 'the-unending-coil',
        href: '#the-unending-coil',
        title: 'The Unending Coil of Bahamut',
        title: <p style={{margin: 0 }}><FFIcon type="HighEndDuty"/> The Unending Coil of Bahamut (Ultimate)</p>,
    },
    {
        key: 'second-run-of-tea',
        href: '#second-run-of-tea',
        title: <p style={{margin: 0 }}><FFIcon type="HighEndDuty"/> The Epic of Alexander (Ultimate)</p>,
    },
    {
        key: 'the-weapons-refrain',
        href: '#the-weapons-refrain',
        title: <p style={{margin: 0 }}><FFIcon type="HighEndDuty"/> The Weapon&apos;s Refrain (Ultimate)</p>,
    },
    {
        key: 'the-necromancer',
        href: '#the-necromancer',
        title: <p style={{margin: 0 }}><FFIcon type="DD"/> The Necromancer</p>,
    },
    {
        key: 'lone-hero',
        href: '#lone-hero',
        title: <p style={{margin: 0 }}><FFIcon type="DD"/> Lone Hero</p>,
    },
    {
        key: 'dragonsongs-reprise',
        href: '#dragonsongs-reprise',
        title: <p style={{margin: 0 }}><FFIcon type="HighEndDuty"/> Dragonsong&apos;s Reprise (Ultimate)</p>,
    },
    {
        key: 'eureka-orthos-solo',
        href: '#eureka-orthos-solo',
        title: <p style={{margin: 0 }}><FFIcon type="DD"/> Once and Future Queen</p>,
    },
  ]}
   
   
   >
      
      </Anchor>
      </Col>
      </Row>
  
  </div>
  
  
   
  );
}