'use client' //necessary for card.meta to work

import React from 'react';
import {Card,Image,Divider,Flex } from 'antd';

export default function Guides() {
  return (
    <div>
    <Divider  orientation="left" style={{ color: '#FFAEBC' }}>Eureka Orthos</Divider>
    <Flex wrap="wrap" gap="small">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
                <Image height={135} alt="example" src="/images/guides/excalibur.webp" />
          }
          >
            <Card.Meta
            title='EO Floor 99 BOSS'
            description={<a href='https://youtu.be/Pdjm1YqDUco' target="_blank">Watch on Youtube</a>}
            />
            
        </Card>

      

        <Card
            hoverable
            style={{ width: 240 }}
            cover={
                <Image alt="example" src="/images/guides/floor90.webp" />
          }
          >
            <Card.Meta
            title='EO Floor 90 BOSS'
            description={<a href='https://youtu.be/soKEQ3Q_1kA' target="_blank">Watch on Youtube</a>}
            />
            
        </Card>
    </Flex>
    </div>
  )
}
