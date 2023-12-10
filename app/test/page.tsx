import readJsonFiles from '../../lib/readJsonFiles'
import path from 'path';

import MilestoneItem from '../components/MilestoneItem';
import localFont from 'next/font/local'


export default function page() {
    const data = readJsonFiles(path.join(process.cwd(),'app','test','data'))

    return (
      <div>
        {data.map((singleData, index) => (
          <MilestoneItem key={index} data={singleData} />
        ))}
      </div>
  )
}

