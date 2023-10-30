import React from 'react';
import { Avatar, List, Space } from 'antd';
import AllPosts from '../components/AllPosts'
import { getAllPosts } from '@/lib/posts-util';

const data = getAllPosts()

export default function Stories() {
  return (
    <AllPosts data={data}/>
  )
}


