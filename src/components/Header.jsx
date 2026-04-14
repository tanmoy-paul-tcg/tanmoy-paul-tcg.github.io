'use client';

import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";
import ThemeButton from "./ThemeButton";

function Header() {
  const pathname = usePathname();
  
  // Don't show header on admin pages
  if (pathname.startsWith('/admin')) return null;
  
  const navItems = [
    { key: "/", label: "Home" },
    { key: "/research", label: "Research" },
    { key: "/team", label: "Team" },
    { key: "/events", label: "Events" },
    { key: "/publications", label: "Publications" },
    { key: "/teaching", label: "Teaching" },
    { key: "/contact", label: "Contact" },
  ];

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header className="header">
      <Container>
        <Navbar variant="dark" expand="lg" collapseOnSelect>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand as={Link} href="/">
            <img src="/images/logo.svg" alt="logo-image" height="80" className="d-inline-block"/>
          </Navbar.Brand>
          <ThemeButton/>
          <Navbar.Collapse id="basic-navbar-nav" className="col-nav">
            <Nav>
              {navItems.map((item) => (
                <Nav.Item key={item.key}>
                  <Nav.Link
                    as={Link}
                    href={item.key}
                    className={isActive(item.key) ? "active" : ""}
                  >
                    {item.label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
          <ThemeSwitch/>
        </Navbar>
        <style dangerouslySetInnerHTML={{ __html: `
          .header {
            background-color: var(--primary-color);
            backdrop-filter: blur(3px);
            -webkit-backdrop-filter: blur(3px);
            width: 100%;
            position: sticky;
            top: 0;
            z-index: 999;
          }

          .navbar {
            background-color: rgba(255 255 255 / 0);
          }

          .navbar-brand {
            margin-right: 12px;
            margin-left: 12px;
          }

          .nav-link {
            color: #fafafa;
            font-size: 18px;
          }

          .navbar-nav .active {
            background-color: var(--secondary-color);
            border-radius: 5px;
            transition: background-color 0.4s ease;
          }

          .navbar-nav .nav-link.active {
            color: var(--primary-color);
            font-weight: bold;
          }

          .navbar {
            --bs-navbar-toggler-border-color: none;
          }

          .sec {
            color: var(--secondary-color);
          }

          @media (max-width: 992px) {
            .nav-link {
              text-align: center;
              margin-top: 10px;
              padding-left: 5px;
            }

            .navbar-brand {
              font-weight: 400;
              margin-right: 4px;
              margin-left: 4px;
            }
          }
        `}} />
      </Container>
    </header>
  );
}

export default Header;
