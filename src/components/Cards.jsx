import React from "react";
import { Card, Col } from "react-bootstrap";
import data from "../pubs.json";

function Cards() {
  return data.map((item, index) => (
    <Col lg={12} className="mb-4" key={index}>
      <Card>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.authors}
            <br/>
            {item.journal},{' '}
            {item.date}
          </Card.Text>
        </Card.Body>
      </Card>
      <style>
        {`
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
        }
        
        .card-img-top {
          height: 250px;
          object-fit: cover;
        }
        
        .card-title {
          font-size: 24px;
          font-weight: bold;
        }
        
        .card-text {
          font-size: 18px;
          line-height: 1.5;
          color: var(--secondary-color);
        }
        
        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }
        `}
      </style>
    </Col>
  ));
}

export default Cards;
