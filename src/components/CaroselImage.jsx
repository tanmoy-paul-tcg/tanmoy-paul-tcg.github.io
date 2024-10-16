import React from 'react';

const CarouselImage = ({
  title = 'CarouselImage',
  pic,
}) => (
  <svg
    className="d-block w-100"
    width="1000"
    height="500"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={`${title}`}
    focusable="false"
  >
    <image
      width="100%"
      height="100%"
      xlinkHref={pic}
      preserveAspectRatio="xMidYMid slice"
    />
  </svg>
);

CarouselImage.displayName = 'CarouselImage';

export default CarouselImage;