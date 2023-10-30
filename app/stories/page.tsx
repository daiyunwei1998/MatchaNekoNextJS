import React from 'react';
import { Avatar, List, Space } from 'antd';
import AllPosts from '../components/AllPosts'
import { getAllPosts } from '@/lib/posts-util';

const data1 = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: 'images/fficon/MSQ.png',
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

const data = getAllPosts()

export default function Stories() {
  return (
    <AllPosts data={data}/>
  )
}


