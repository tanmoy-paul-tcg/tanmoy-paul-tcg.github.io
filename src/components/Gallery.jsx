import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import gal1 from "../images/gal1.jpg";
import gal2 from "../images/gal2.jpg";
import gal3 from "../images/gal3.jpg";
import gal4 from "../images/gal4.jpg";
import gal5 from "../images/gal5.jpg";
import gal6 from "../images/gal6.jpg";
import gal7 from "../images/gal7.jpg";
import gal8 from "../images/gal8.jpg";
import gal9 from "../images/gal9.jpeg";

function Gallery() {
    return(
        <div>
            <Row>
                <Col lg={4} className="my-2">
                    <Image src={gal1} className="gallery-img" fluid />
                </Col>
                <Col lg={4} className="my-2">
                    <Image src={gal2} className="gallery-img" fluid />
                </Col>
                <Col lg={4} className="my-2">
                    <Image src={gal3} className="gallery-img" fluid />
                </Col>
            </Row>
            <Row>
                <Col lg={4} className="my-2">
                    <Image src={gal4} className="gallery-img" fluid />
                </Col>
                <Col lg={4} className="my-2">
                    <Image src={gal5} className="gallery-img" fluid />
                </Col>
                <Col lg={4} className="my-2">
                    <Image src={gal6} className="gallery-img" fluid />
                </Col>
            </Row>
            <Row>
                <Col lg={4} className="my-2">
                    <Image src={gal7} className="gallery-img" fluid />
                </Col>
                <Col lg={4} className="my-2">
                    <Image src={gal8} className="gallery-img" fluid />
                </Col>
                <Col lg={4} className="my-2">
                    <Image src={gal9} className="gallery-img" fluid />
                </Col>
            </Row>
            <style>
                {`
                    .gallery-img {
                        border-radius: 10px;
                    }
                `}
            </style>
        </div>
    );
};

export default Gallery;