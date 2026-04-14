import { Container, Row, Col } from "react-bootstrap";
import Rimage from "../components/Rimage";
import Bio from "../components/Bio";
import Buttons from "../components/Buttons";
import Caro from "../components/Caro";
import Gallery from "../components/Gallery";
import Marquee from "../components/Marquee";
import TypewriterSection from "../components/TypewriterSection";
import { getMarquee, getHomepage } from "../lib/db";

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  let marqueeData = null;
  let hp = null;
  
  try {
    marqueeData = await getMarquee();
    hp = await getHomepage();
  } catch (e) {
    console.error('Failed to fetch data:', e);
  }

  if (!hp) {
    // Failsafe empty state
    hp = {
      bio: {},
      typewriter: [],
      catchText: "",
      machines: [],
      carousel: [],
      gallery: []
    };
  }

  return (
    <Container>
      <Row className="mb-4">
        <Marquee text={marqueeData?.text} link={marqueeData?.link} />
      </Row>
      <Row>
        <Col lg={4}>
          <Rimage src={hp.bio?.profileImage || "/images/pfp.jpg"} />
          <Buttons />
        </Col>
        <Col lg={8}>
          <Bio bio={hp.bio} />
        </Col>
      </Row>
      <hr className="my-4" />
      <Row>
        <TypewriterSection strings={hp.typewriter} />
        <p className="mt-3 catch">
          <span className="sec">{'{ '}</span>
          {hp.catchText}
          <span className="sec">{' }'}</span>
        </p>
      </Row>
      <Row>
        <Col lg={8} className="my-4">
          <Caro carouselData={hp.carousel} />
        </Col>
        <Col lg={4} className="my-4">
          <ul className="list-group mb-3">
            <li className="list-group-item lg-head">Machines</li>
          </ul>
          <ul className="list-group">
            {hp.machines?.map((m, i) => (
              <li className="list-group-item" key={i}>
                {m.name} <br/>
                {m.specs}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <Gallery images={hp.gallery} />
      <style>{`
        .col-lg-4 {
          justify-content: center;
        }

        .type {
          font-weight: bold;
          text-align: center;
          font-size: 28px;
        }

        .catch {
          font-size: 18px;
          font-weight: bold;
        }

        .catch .sec {
          color: var(--secondary-color);
          font-size: 22px;
        }

        .list-group-item {
          font-weight: bold;
          font-size: 18px;
        }

        .lg-head {
          background-color: var(--secondary-color);
          color: var(--primary-color);
          font-size: 24px;
        }

        @media (max-width: 767px) {
          .catch {
            text-align: justify;
          }
        }
      `}</style>
    </Container>
  );
}
