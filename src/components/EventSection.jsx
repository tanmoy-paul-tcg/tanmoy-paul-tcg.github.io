'use client';

import React from "react";
import { Row, Col } from "react-bootstrap";

function EventSection({ name, images }) {
    return(
        <div>
            <h2>{name} :</h2>
            {/* Chunk images into rows of 3 */}
            {Array.from({ length: Math.ceil(images.length / 3) }, (_, rowIdx) => (
              <Row key={rowIdx}>
                {images.slice(rowIdx * 3, rowIdx * 3 + 3).map((src, i) => (
                  <Col lg={4} className="my-2" key={i}>
                    <img src={src} className="gallery-img img-fluid" alt={`${name} ${rowIdx * 3 + i + 1}`} />
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

export default EventSection;
