'use client'

import React from 'react';
import { Timeline,Card } from 'antd';
import FFIcon from '../components/FFIcon';

const { Meta } = Card;

export default function Milestones() {
  return (
    <Timeline
    items={[
      {
        children:  <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>,
      },
      {
        children: 'Solve initial network problems 2015-09-01',
      },
      {
        children: 'Technical testing 2015-09-01',
      },
      {
        children: 'Network problems being solved 2015-09-01',
      },
    ]}
  />
   
  );
}