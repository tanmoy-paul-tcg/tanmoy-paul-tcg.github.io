import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faBootstrap} from "@fortawesome/free-brands-svg-icons";
import tcg from "../images/tcg.svg";

function Footer() {
  return (
    <footer className="footer">
        <Container>
            <Row>
                <Col sm={4} className='footer-cols'>
                    <a href="https:www.tcgcrest.org"><Image src={tcg} className='footer-img'/></a>
                </Col>
                <Col sm={4} className='footer-cols'>
                    <span className='pink'>Address</span>
                    <br/>
                    Office:
                    <br/>
                    First Floor, Tower 1, Bengal Eco Intelligent Park (Techna), <br/>
                    Block EM, Plot No 3, Sector V, Salt lake, <br/>
                    Kolkata 700091, West Bengal, INDIA
                    <br/>
                    <br/>
                    Laboratory:
                    <br/>
                    Third Floor, Delta Building, Bengal Intelligent Park, <br/>
                    Street No. 18, Block EP, Sector V, Salt lake, <br/>
                    Kolkata 700091, West Bengal, INDIA
                </Col>
                <Col sm={4} className='footer-cols'>
                    <span className='pink'>Contact</span>
                    <br/>
                    E-mail:
                    <br/>
                    <a href="mailto:someone@example.com" target="_top">tanmoy.paul@tcgcrest.org</a>
                    <br/>
                    <a href="mailto:someone@example.com" target="_top">tanmoy.paul@tcgcrest.org</a>
                </Col>
            </Row>
            <hr className="my-4" />
            <Row>
                <p><span className='pink'>&copy;</span> 2024 Pritish Joshi
                <br/>
                <br/>Written in <FontAwesomeIcon icon={faReact} /> & <FontAwesomeIcon icon={faBootstrap} /></p>
            </Row>
            <style>
                {`
                .footer {
                    background-color: var(--primary-color);
                    color: var(--tertiary-color);
                    text-align: center;
                    width: 100%;
                    bottom: 0;
                }

                .footer-img {
                    width: 80%;
                }

                .footer-cols {
                    text-align: left;
                }

                .footer .pink {
                    color: var(--secondary-color);
                    font-weight: bold;
                    font-size: 150%;
                }

                .footer a {
                    color: var(--secondary-color);
                }

                .footer a:hover {
                    cusror: pointer;
                    font-size: 110%;
                }

                .fa-react {
                    color: var(--secondary-color);
                }

                .fa-bootstrap {
                    color: var(--secondary-color);
                }
                `}
            </style>
        </Container>
    </footer>
  );
}

export default Footer;
