'use client'

import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Divider, Image as AntdImage, Badge } from 'antd';

export default function Gallery({ data }) {
    // Create an object to group images by parentFolder
    const groupedImages = {};
  
    data.forEach((image) => {
      const parentFolder = image.parentFolder;
  
      if (!groupedImages[parentFolder]) {
        groupedImages[parentFolder] = [];
      }
  
      groupedImages[parentFolder].push(image);
    });
  
    // Define the desired order for a few parentFolders
    const desiredOrder = ['Cover', 'Friends', 'Litan'];
  
    // Sort the groupedImages object based on the desired order
    const sortedGroupedImages = {};
    desiredOrder.forEach((parentFolder) => {
      if (groupedImages[parentFolder]) {
        sortedGroupedImages[parentFolder] = groupedImages[parentFolder];
        delete groupedImages[parentFolder]; // Remove from the original object
      }
    });
  
    // Add the remaining parentFolders to the sortedGroupedImages object
    Object.keys(groupedImages).forEach((parentFolder) => {
      sortedGroupedImages[parentFolder] = groupedImages[parentFolder];
    });
  
    return (
      <div>
        {Object.entries(sortedGroupedImages).map(([parentFolder, images], i) => (
          <div key={i}>
            <Divider orientation="left" style={{ color: '#FFAEBC' }}>
              {parentFolder}
            </Divider>
  
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
              <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                columnsCount={3}
                gutter="10px"
              >
                {images.map((image, j) => (
                  <div key={j}>
                    {image.label ? (
                      <Badge.Ribbon text={image.label}>
                        <AntdImage
                          src={image.path}
                          style={{ width: '100%', display: 'block' }}
                          alt=""
                        />
                      </Badge.Ribbon>
                    ) : (
                      <AntdImage
                        src={image.path}
                        style={{ width: '100%', display: 'block' }}
                        alt=""
                      />
                    )}
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        ))}
      </div>
    );
  }