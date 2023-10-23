'use client'

import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { Image as AntdImage} from 'antd';
import { Card } from 'antd';

const { Meta } = Card;

const images = ['./images/screenshots/1.png', './images/screenshots/2.png', './images/screenshots/3.png', './images/screenshots/4.png', './images/screenshots/ffxiv_dx11_2023-03-12_21-16-28.png', './images/screenshots/ffxiv_03012023_185502_278.png', 'screenshots/ffxiv_03012023_185508_993.png', 'screenshots/ffxiv_06302022_202109_599.png', './images/screenshots/HOH.png']



export default function page() {
  return (
    <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
    <Masonry
    breakpointCols={3}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column"
    columnsCount={3} gutter="10px">
        {images.map((image, i) => ( 
          <Card
          key ={i}
          hoverable
          style={{ width: "100%" }}
          cover={<AntdImage
            key={i}
            src={image}
            style={{width: "100%", display: "block"}}
            alt=""
        />}
        >
          <Meta title="test" description="test description" />
        </Card>                
                        
                    ))}
    </Masonry>
    </ResponsiveMasonry>
  )
}
