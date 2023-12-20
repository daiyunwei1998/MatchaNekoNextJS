import React from 'react';
import { Image, Carousel } from 'antd';

export default function MilestoneItemCover({ width, height, images }) {
  const widthValue = width;
  const heightValue = height;

  if (images &&  images.length > 1) {
    // Render carousel if there is more than one image
    return (
      <Carousel autoplay>
        {images.map((image, index) => (
          <div key={index}>
            <Image alt={image[1]} src={image[0]} width={widthValue} height={heightValue} />
          </div>
        ))}
      </Carousel>
    );
  } else if (images && images.length === 1) {
    // Render a single image if there is only one image
    const [src, alt] = images[0];
    return <Image alt={alt} src={src} width={widthValue} height={heightValue} />;
  } else {
    // Handle the case where there are no images
    return <p>No images provided</p>;
  }
}
