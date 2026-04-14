import { Container, Row, Col } from "react-bootstrap";
import Cards from "../../components/Cards";
import { getPublications } from "../../lib/db";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Publications | Materials Modelling Laboratory',
  description: 'Publications by Dr. Tanmoy Paul and the Materials Modelling Laboratory team.',
};

export default async function PublicationsPage() {
  let publications = [];
  try {
    publications = await getPublications();
  } catch (e) {
    console.error('Failed to fetch publications:', e);
  }

  publications = JSON.parse(JSON.stringify(publications));

  return (
    <Container>
      <Row>
        <Col lg={4}>
          <h1>Publications</h1>
        </Col>
      </Row>
      <hr className="my-4" />
      <Row>
        <Cards publications={publications} />
      </Row>
      <style>{`
        h1 {
          font-size: 50px;
          font-weight: bold;
        }
      `}</style>
    </Container>
  );
}
