import React from 'react'
import { Spin } from 'antd';

export default function stories() {
  return (
    <div style={{ display: 'flex'}}>
      <div style={{marginLeft:'50px'}}>
      <p >I&apos;ve met awesome people like 夜子吃椰子@紅玉海, 伊弗列姆@晨曦王座, Liasa@神意之地. They are my courage and my strength, the real treasure of my quest. </p>
      <br></br>
      <h2 style={{color:'#FFAEBC'}}><Spin />  This section is still WIP. </h2>
      </div>
      
      <img style={{ width: '40%', height: 'auto'}} src="/images/stories/WIP.png"></img>
    </div>
  )
}
