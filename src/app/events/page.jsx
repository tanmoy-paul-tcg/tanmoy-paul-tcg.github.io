import { Container, Row, Col } from "react-bootstrap";
import EventSection from "../../components/EventSection";
import { getEvents } from "../../lib/db";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Events | Materials Modelling Laboratory',
  description: 'Events and outreach programs by the Materials Modelling Laboratory.',
};

export default async function EventsPage() {
  let events = [];
  try {
    events = await getEvents();
  } catch (e) {
    console.error('Failed to fetch events:', e);
  }

  events = JSON.parse(JSON.stringify(events));

  return (
    <Container>
      <Row>
        <Col lg={4}>
          <h1>Events</h1>
        </Col>
      </Row>
      <hr className="my-4" />

      {events.map((event) => (
        <Row key={event._id}>
          <EventSection name={event.name} images={event.images} />
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
      `}</style>
    </Container>
  );
}
