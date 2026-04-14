import { Container, Row, Col } from "react-bootstrap";
import Rimage from "../components/Rimage";
import Bio from "../components/Bio";
import Buttons from "../components/Buttons";
import Caro from "../components/Caro";
import Gallery from "../components/Gallery";
import Marquee from "../components/Marquee";
import TypewriterSection from "../components/TypewriterSection";
import { getMarquee } from "../lib/db";

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  let marqueeData = null;
  try {
    marqueeData = await getMarquee();
  } catch (e) {
    console.error('Failed to fetch marquee:', e);
  }

  return (
    <Container>
      <Row className="mb-4">
        <Marquee text={marqueeData?.text} link={marqueeData?.link} />
      </Row>
      <Row>
        <Col lg={4}>
          <Rimage />
          <Buttons />
        </Col>
        <Col lg={8}>
          <Bio />
        </Col>
      </Row>
      <hr className="my-4" />
      <Row>
        <TypewriterSection />
        <p className="mt-3 catch">
          <span className="sec">{'{ '}</span>
          At the forefront of computational materials science, 
          our lab pioneers the use of advanced computational techniques 
          to design and discover cutting-edge materials for next-generation 
          batteries and energy storage devices. 
          Applying ab initio molecular dynamics, 
          Density Functional Theory (DFT), and advanced methods 
          including machine learning and neural networks, 
          allows us to investigate material behavior at the atomic level.  
          Our interdisciplinary team of computational physicists and chemists 
          pushes the boundaries of materials innovation, leveraging AI/ML-driven models 
          and high-performance simulations to accelerate the discovery of sustainable energy solutions. 
          <span className="sec">{' }'}</span>
        </p>
      </Row>
      <Row>
        <Col lg={8} className="my-4">
          <Caro />
        </Col>
        <Col lg={4} className="my-4">
          <ul className="list-group mb-3">
            <li className="list-group-item lg-head">Machines</li>
          </ul>
          <ul className="list-group">
            <li className="list-group-item">
              NVIDIA RTX A5000 GPU <br/>
              24 GB Graphics Memory
            </li>
            <li className="list-group-item">
              NVIDIA RTX 4060 GPU <br/>
              8 GB DDR6 Graphics Memory
            </li>
            <li className="list-group-item">
              AMD EPIC 7453 CPU <br/>
              256 GB DDR5 Memory | 56 Cores   
            </li>
            <li className="list-group-item">
              Intel Xeon Cascadelake 8268 CPU <br/>
              PARAM Brahma <br/>
              (IISER Pune)
            </li>
            <li className="list-group-item">
              Intel Xeon Skylake 6148 CPU <br/>
            </li>
            <li className="list-group-item">
              Intel Xeon Gold 6130 CPU <br/>
              Tetralith <br/>
            </li>
          </ul>
        </Col>
      </Row>
      <Gallery />
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
