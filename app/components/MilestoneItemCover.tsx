import React from 'react'
import { Image } from 'antd';
import { Anchor, Row, Col,Carousel } from 'antd';

export default function MilestoneItemCover(images) {
  return (
    <Image 
    alt="My first appearance as a catboy" 
    src="/images/milestones/catboy.webp" 
    width={256}
    height={256}
  />
  )
}
