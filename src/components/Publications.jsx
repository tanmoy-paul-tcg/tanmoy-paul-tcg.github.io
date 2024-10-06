import React from "react";
import { Image , Container, Row } from "react-bootstrap";

function Publications() {
  return (
    <Container>
      <Row>
      <h1>Not Found!</h1>
      <h2>Publications page is being developed</h2>
      </Row>
      <Row>
        <Image src='https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/offline_2.svg' alt="Offline Image" className="off-img"/>
      </Row>
      <style>
        {`
        h1 {
          color: var(--primary-color);
          text-align: center;
        }

        h2 {
          color: var(--secondary-color);
          text-align: center;
        }

        .off-img {
          width: 100%;
          height: 100vh;
          align-self: center;
        }
        `}
      </style>
    </Container>
  );
}

export default Publications;
