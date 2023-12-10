import React from 'react';
import path from 'path';
import { Timeline } from 'antd';
import readJsonFiles from '../../lib/readJsonFiles';
import MilestoneItem from '../components/MilestoneItem';

export default function Page() {
  const data = readJsonFiles(path.join(process.cwd(), 'app', 'test', 'data'));

  const timelineItems = data.map((singleData, index) => ({
    children: <MilestoneItem key={index} data={singleData} />,
  }));

  return (
    <div>
      <Timeline items={timelineItems} />
    </div>
  );
}
