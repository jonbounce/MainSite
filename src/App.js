import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";

import Nav from "react-bootstrap/Nav";
import Routes from "./Route";
import { LinkContainer } from "react-router-bootstrap";

function App() {

  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
            DCLM-NA
      </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/Register">
              <Nav.Link href="/Register">Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Login">
              <Nav.Link href="/Login">Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;