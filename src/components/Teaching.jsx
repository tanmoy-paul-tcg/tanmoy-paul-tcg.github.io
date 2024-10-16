import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

function Teaching() {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <h1>Teaching</h1>
        </Col>
      </Row>
      <hr className="my-4" />
      <Row>
        <h2>PhD Coursework: Physics and Chemistry of Materials</h2>
        <Col lg={12}>
          <Table striped="columns">
            <thead>
              <tr>
                <th colSpan={3}>Module-5: Defects in Solids</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lect-1</td>
                <td>Introduction</td>
                <td>Time - TBA</td>
              </tr>
              <tr>
                <td>Lect-2</td>
                <td>Point defects</td>
                <td>Time - TBA</td>
              </tr>
              <tr>
                <td>Lect-3</td>
                <td>Schottky and Frenkel defects</td>
                <td>Time - TBA</td>
              </tr>
              <tr>
                <td>Lect-4</td>
                <td>Dislocations</td>
                <td>Time - TBA</td>
              </tr>
              <tr>
                <td>Lect-5</td>
                <td>Chemical potentials</td>
                <td>Time - TBA</td>
              </tr>
              <tr>
                <td>Lect-6</td>
                <td>Diffusion in Solids</td>
                <td>Time - TBA</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <style>
        {`
        h1 {
            font-size: 50px;
            font-weight: bold;
          }

        h2 {
          color: var(--secondary-color);
        }
        `}
      </style>
    </Container>
  );
}

export default Teaching;
