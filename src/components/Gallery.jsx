import React from "react";
import { Row, Col } from "react-bootstrap";

function Gallery({ images }) {
    if (!images || images.length === 0) return null;

    // chunk array into groups of 3
    const chunks = [];
    for (let i = 0; i < images.length; i += 3) {
      chunks.push(images.slice(i, i + 3));
    }

    return(
        <div>
            {chunks.map((chunk, rowIdx) => (
              <Row key={rowIdx}>
                {chunk.map((src, colIdx) => (
                  <Col lg={4} className="my-2" key={src + colIdx}>
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