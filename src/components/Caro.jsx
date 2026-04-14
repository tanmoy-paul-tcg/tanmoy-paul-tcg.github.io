'use client';

import { useState } from 'react';
import { Carousel } from 'react-bootstrap';



function Caro({ carouselData }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  if (!carouselData || carouselData.length === 0) return null;

  return (
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {carouselData.map((item, i) => (
        <Carousel.Item key={i}>
          <svg
            className="d-block w-100"
            width="1000"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={item.caption}
            focusable="false"
          >
            <image
              width="100%"
              height="100%"
              xlinkHref={item.pic}
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
          <Carousel.Caption>
            <h1>{item.caption}</h1>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    <style dangerouslySetInnerHTML={{ __html: `
      .carousel, .carousel-inner {
          border-radius: var(--bs-border-radius);
      }

      .carousel {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          height: 500px;
      }

      .carousel-caption {
          background-color: rgba(255, 255, 255, 0.6);
          border-radius: var(--bs-border-radius);
          position: absolute;
          right: 10%;
          left: 10%;
      }

      .carousel-caption h1 {
          color: var(--primary-color) !important;
          font-size: 200%;
      }

      .carousel-indicators {
          margin-bottom: 0;
      }

      .carousel-control-prev-icon {
          background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" fill="%23fff"><path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/></svg>');
      }

      .carousel-control-next-icon {
          background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" fill="%23fff"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>');
      }
    `}} />
    </div>
  );
}

export default Caro;