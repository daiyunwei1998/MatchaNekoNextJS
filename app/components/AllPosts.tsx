'use client'

import React from 'react'
import { Avatar, List } from 'antd';

export default function AllPosts({data}) { 
  return (
    <List
    itemLayout="vertical"
    size="large"
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        key={item.title}
        extra={
          <a href={`stories/${item.slug}`}><img
            width={272}
            alt={item.slug}
            src={item.image}
          /></a>
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={`stories/${item.slug}`}>{item.title}</a>}
          description={item.description}
        />
        {item.excert}
      </List.Item>
    )}
  />
  )
}
