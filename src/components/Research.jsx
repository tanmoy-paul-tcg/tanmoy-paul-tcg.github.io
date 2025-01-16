import React from "react";
import { Image, Container, Row, Col, Card } from "react-bootstrap";
import { researchTopics, posters } from "../data/researchData";
import pos1 from "../images/pos1.jpg";
import pos2 from "../images/pos2.jpg";
import pos3 from "../images/pos3.jpg";
import pos4 from "../images/pos4.jpg";

const posterImages = { pos1, pos2, pos3, pos4 };

function Research() {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <h1>Research</h1>
        </Col>
      </Row>
      <hr className="my-4" />
      
      {researchTopics.map((topic) => (
        <Row key={topic.title}>
          <h2 className="mt-4">{topic.title} :</h2>
          <Col md={4}>
            <Image src={topic.image} className="res-img mb-2"/>
          </Col>
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Text>
                  {topic.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}

      <hr className="my-4" />
      <Row>
        <h2>Presented Posters :</h2>
      </Row>
      {posters.map((poster) => (
        <Row className="my-2" key={poster}>
          <Image src={posterImages[poster]} className="poster-img" fluid />
        </Row>
      ))}

      <style>
        {`
          h1 {
            font-size: 50px;
            font-weight: bold;
          }

          h2 {
            color: var(--secondary-color);
          }

          .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
            border-radius: 10px;
            height: 270px;
            overflow: auto;
          }
          
          .res-img {
            border-radius: 10px;
            width: 100%;
            height: 270px;
            border: 0.5px solid #9ed203;
          }
          
          .card-text {
            font-size: 18px;
            line-height: 1.5;
          }
          
          .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          }

          .poster-img {
            border-radius: 20px;
            padding: 10px;
            border: 1px solid #9ed203;
          }

          @media (max-width: 767px) {
            .card {
                height: var(--bs-card-height);
            }
          }
        `}
      </style>
    </Container>
  );
}

export default Research;
