'use client'

import parse from 'html-react-parser';
import React from 'react'
import {Card } from 'antd';
import Script from 'next/script'
import localFont from 'next/font/local'
import MilestoneItemCover from './MilestoneItemCover';
import PartyList from '../components/partyList';
import milestonesStyles from './milestonesStyles.module.css'

const { Meta } = Card;
const myFont = localFont({ src: '../../fonts/KleeOne-SemiBold-TC.ttf' })

//setting card width
const widthValues = {
  large: '100%',   //500
  small: '70%',   //256
};


export default function MilestoneItem(params) {
  const data = params.data
  const widthValue = widthValues[data.size] || '100%'; // Default to 256 if size is not 'large' or 'small'

  return (
    <div>
      <Script src="https://img.finalfantasyxiv.com/lds/pc/global/js/eorzeadb/loader.js?v2"></Script>
      <Card
        className={`${milestonesStyles.milestoneCards} ${myFont.className}`}
        id = {data.id}
        hoverable
        style={{ width: widthValue }}
        cover={<MilestoneItemCover width = '100%' height = 'auto' images = {data.images}/>}  
      >
      <Meta className={myFont.className}  title={<span style={{color: '#ffaebc'}}>{data.title}</span>} description={data.description}  />
      
      <div className={myFont.className}  style={{ marginTop: '1rem' }}>
        {data.partyList && data.partyList.length > 0 && <PartyList plist = {data.partyList}/>}
      </div>
      
      
      <div  className={myFont.className} style={{ marginTop: '1rem' }}>
        {data.contents && data.contents.length > 0 && data.contents.map((content, index) => (
          <p style={{ marginTop: '0', marginBottom: '0' }} key={index}>{parse(content)}</p>
        ))}
      </div>

      <div  className={myFont.className} style={{ marginTop: '1rem' }}>
        {data.urls && data.urls.length > 0 && data.urls.map((url, index) => (
            <React.Fragment key={index}>
              {url[0] == "View Achievement" ? ( <a href={url[1]} target="_blank" className = "eorzeadb_link">{url[0]}</a>) : (
                   <a href={url[1]} target="_blank">{url[0]}</a>
              )}
            <br />
         </React.Fragment>
        ))}
      </div>



      </Card>,
     
      
    </div>
  )
}
