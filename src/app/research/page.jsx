import { Container, Row, Col } from "react-bootstrap";
import { getResearchTopics, getPosters } from "../../lib/db";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Research | Materials Modelling Laboratory',
  description: 'Research topics including battery materials discovery, machine learning, force fields, electronic structure, and reaction dynamics.',
};

export default async function ResearchPage() {
  let topics = [];
  let posters = [];

  try {
    topics = await getResearchTopics();
    posters = await getPosters();
  } catch (e) {
    console.error('Failed to fetch research data:', e);
  }

  // Serialize MongoDB ObjectIds
  topics = JSON.parse(JSON.stringify(topics));
  posters = JSON.parse(JSON.stringify(posters));

  return (
    <Container>
      <Row>
        <Col lg={4}>
          <h1>Research</h1>
        </Col>
      </Row>
      <hr className="my-4" />
      
      {topics.map((topic) => (
        <Row key={topic._id}>
          <h2 className="mt-4">{topic.title} :</h2>
          <Col md={4}>
            <img src={topic.image} className="res-img mb-2" alt={topic.title} />
          </Col>
          <Col md={8}>
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  {topic.description}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      ))}

      <hr className="my-4" />
      <Row>
        <h2>Presented Posters :</h2>
      </Row>
      {posters.map((poster) => (
        <Row className="my-2" key={poster._id}>
          <img src={poster.image} className="poster-img img-fluid" alt="poster" />
        </Row>
      ))}

      <style>{`
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
      `}</style>
    </Container>
  );
}
