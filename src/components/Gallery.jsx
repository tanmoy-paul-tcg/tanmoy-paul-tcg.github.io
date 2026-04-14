import React from "react";
import { Row, Col } from "react-bootstrap";

const galleryImages = [
  "/images/gal1.jpg", "/images/gal2.jpg", "/images/gal3.jpg",
  "/images/gal4.jpg", "/images/gal5.jpg", "/images/gal6.jpg",
  "/images/gal7.jpg", "/images/gal8.jpg", "/images/gal9.jpeg",
];

function Gallery() {
    return(
        <div>
            {[0, 3, 6].map((start) => (
              <Row key={start}>
                {galleryImages.slice(start, start + 3).map((src) => (
                  <Col lg={4} className="my-2" key={src}>
                    <img src={src} className="gallery-img img-fluid" alt="gallery" />
                  </Col>
                ))}
              </Row>
            ))}
            <style>{`
                .gallery-img {
                    border-radius: 10px;
                    -webkit-transition: all 0.5s linear;
                    -o-transition: all 0.5s linear;
                    transition: all 0.5s linear;
                }

                .gallery-img:hover {
                    -webkit-filter: drop-shadow(0px 0px 20px rgba(158, 210, 3, 0.8));
                }
            `}</style>
        </div>
    );
}

export default Gallery;