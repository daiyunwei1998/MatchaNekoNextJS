'use client'

import parse from 'html-react-parser';
import React from 'react'
import { Timeline,Card } from 'antd';
import FFIcon from './FFIcon';
import { Anchor, Row, Col,Carousel } from 'antd';
import { Image } from 'antd';
import Script from 'next/script'
import localFont from 'next/font/local'
import milestonesStyles from './milestonesStyles.module.css'
import MilestoneItemCover from './MilestoneItemCover';
import PartyList from '../components/partyList';

const { Meta } = Card;
const myFont = localFont({ src: '../../fonts/KleeOne-SemiBold-TC.ttf' })

export default function MilestoneItem(params) {
  const data = params.data
  console.log(data.urls)
  return (
    <div>
      <Card
        className={myFont.className}
        id = {data.id}
        hoverable
        style={{ width: 256 }}
        cover={<MilestoneItemCover images = {data.images}/>}  
      >
      <Meta title={<span style={{color: '#ffaebc'}}>{data.title}</span>} description={data.description}  />
      
      <div style={{ marginTop: '1rem' }}>
        {data.partyList && data.partyList.length > 0 && <PartyList plist = {data.partyList}/>}
      </div>
      
      
      <div style={{ marginTop: '1rem' }}>
        {data.contents && data.contents.length > 0 && data.contents.map((content, index) => (
          <p style={{ marginTop: '0', marginBottom: '0' }} key={index}>{parse(content)}</p>
        ))}
      </div>

      <div style={{ marginTop: '1rem' }}>
        {data.urls && data.urls.length > 0 && data.urls.map((url, index) => (
           <React.Fragment key={index}>
           <a href={url[1]} target="_blank">{url[0]}</a>
           <br />
         </React.Fragment>
        ))}
      </div>



      </Card>,
     
      
    </div>
  )
}
