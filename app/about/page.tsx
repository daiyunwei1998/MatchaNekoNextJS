import React from 'react'
import { Row, Col } from 'antd';
import { Carousel } from 'antd';

function about() {
  
const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

  return (
   <div>
     <div style={{ display: 'flex', alignItems: 'center' }}>
      <img style={{ width: '50%', height: 'auto'}} src="/images/about/cover.png" ></img>
      <div>
      <h2 style={{color:'#FFAEBC'}}>抹茶貓/Matcha Neko</h2>
      <h3 style={{color:'#C4C4C4'}}>High-end raider, Necromancer, Warrior of Light</h3>
      <p>I&apos;ve met awesome people like 夜子吃椰子@紅玉海, 伊弗列姆@晨曦王座, Liasa@神意之地. They are my courage and my strength, the real treasure of my quest. This site contains my memory of being Matcha the neko. The story of me and those friends I&apos;ve met, the story of us - warriors of light. May you ever walk in the light of the crystal.</p>
      </div>
    </div>
    <div>
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
    </div>
   </div>
  )
}
export default about;