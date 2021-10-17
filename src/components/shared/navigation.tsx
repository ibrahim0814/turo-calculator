import { Link } from "gatsby"
import React from "react"
import { Nav, Navbar, Container } from "react-bootstrap"
import styled from "styled-components"

const Navigation = () => {
  return (
    <NavigationStyleWrapper>
      <Navbar bg="dark" expand="lg" fixed="top" style={{ marginLeft: "0" }}>
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ color: "gray" }}>
            Turo Calculator
          </Navbar.Brand>
          <div style={{ color: "gray" }}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>

          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" style={{ color: "gray" }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" style={{ color: "gray" }}>
                Blog
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavigationStyleWrapper>
  )
}

const NavigationStyleWrapper = styled.div`
  .navbar-dark .navbar-toggler-icon {
    color: white;
  }
`

export default Navigation
