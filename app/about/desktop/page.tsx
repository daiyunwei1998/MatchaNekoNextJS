import React from 'react'
import { Row, Col,Statistic } from 'antd';
import FFIcon from '../../components/FFIcon';
import localFont from 'next/font/local'

// constom font
const myFont = localFont({ src: '../../../fonts/KleeOne-SemiBold-TC.ttf' })

function about() {
  
const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

  return (
   <main className={myFont.className}>
     <div style={{ display: 'flex', alignItems: 'center' }}>
      <img style={{ width: '50%', height: 'auto'}} src="/images/about/cover.webp" ></img>
      <div>
      <h2 style={{color:'#FFAEBC', marginTop: '0px'}}>抹茶貓/Matcha Neko</h2>
      <h3 style={{color:'#C4C4C4'}}>High-end raider, Necromancer, Warrior of Light</h3>
      <p style={{marginRight:'50px'}}>I arrived in Eorzea in 2020. Since then, I&apos;ve been a tank main in high-end raids.</p>
      <p style={{marginRight:'50px'}}>This site contains my memory of being Matcha the neko. The story of me and those friends I&apos;ve met, the story of us - warriors of light. May you ever walk in the light of the crystal.</p>
      <div>
      <Row gutter={20}>
        <Col span={8}>
          <Statistic title="Ultimate Raids" value={4} prefix={<FFIcon type="HighEndDuty"/> } suffix="/ 5"/>
        </Col>
        <Col span={8}>
          <Statistic title="Deep Dungeons" value={3} prefix={<FFIcon type="DD"/> } suffix="/ 3" />
        </Col>
      </Row>
      </div>
      <br></br>
      <a href="https://na.finalfantasyxiv.com/lodestone/character/40688653/" target="_blank" style={{ marginRight: '20px' }}>View Lodestone{'>'}</a>
      <a href="https://www.fflogs.com/character/id/17514901" target="_blank" >View FFLogs{'>'}</a>
      </div>
      
    </div>
   </main>
  )
}
export default about;