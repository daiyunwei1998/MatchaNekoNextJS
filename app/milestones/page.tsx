import React from 'react';
import path from 'path';
import { Timeline } from 'antd';
import readJsonFiles from '../../lib/readJsonFiles';
import MilestoneItem from '../components/MilestoneItem';
import FFIcon from '../components/FFIcon';
import localFont from 'next/font/local'
import { Anchor, Row, Col} from 'antd';
import milestonesStyles from './milestonesStyles.module.css'


const myFont = localFont({ src: '../../fonts/KleeOne-SemiBold-TC.ttf' })

export default function Page() {
  const data = readJsonFiles(path.join(process.cwd(), 'app', 'milestones', 'data'));

  const timelineItems = data.map((singleData, index) => ({
    children: <MilestoneItem key={index} data={singleData} />,
  }));

  const anchorItems = data.map((singleData, index) => ({
    key: singleData.id,
    href: '#'+singleData.id,
    title:  <p style={{margin: 0 }}><FFIcon type={singleData.type}/> {singleData.title}</p>
  }));

  return (
    <div>
        <Row>
        <Col span={18}>
          <Timeline items={timelineItems} />     
        </Col>

        <Col span={6}>
          <Anchor 
            className={`${milestonesStyles.anchor} ${myFont.className}`}
            affix={false} 
            style={{position:'fixed'}}
            items={anchorItems}>
          </Anchor>
        </Col>
        </Row>
    </div>
  );
}


