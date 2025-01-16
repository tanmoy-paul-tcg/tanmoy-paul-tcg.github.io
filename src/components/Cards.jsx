import React from "react";
import { Card, Col } from "react-bootstrap";
import { pubList } from "../data/pubsData";

function Cards() {
  return pubList.map((item, index) => (
    <Col lg={12} className="mb-4" key={index}>
      <Card className="pub-card">
        <Card.Body>
          <a href={item.link} target="_blank"><Card.Title>{item.title}</Card.Title></a>
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
          color: var(--bs-body-color);
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

        .pub-card a {
          text-decoration: none;
        }

        .pub-card a:hover {
          text-shadow: 0 0 5px var(--secondary-color);
        }
        `}
      </style>
    </Col>
  ));
}

export default Cards;
