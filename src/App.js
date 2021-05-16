import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";

import Nav from "react-bootstrap/Nav";
import Routes from "./Route";
import { LinkContainer } from "react-router-bootstrap";

function App() {


  return (
    <>
      <Navbar collapseOnSelect expand="md" className="mb-3 header-bar"
      >
        {/* <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
            DCLM-NA
      </Navbar.Brand>
        </LinkContainer> */}
        <Nav.Link
          className="font-weight-bold text-muted"
          href="/"
          active={window.location.pathname === '/'}
        >
          DCLM-NA
            </Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link
              href="/Register"
              active={window.location.pathname === '/Register'}
              style={
                (window.location.pathname === '/Register' ?
                  { color: "dodgerblue" }
                  : {})
              }
            >
              Register
            </Nav.Link>
            <Nav.Link
              href="/Login"
              active={window.location.pathname === '/Login'}
              style={
                (window.location.pathname === '/Login' ?
                  { color: "dodgerblue" }
                  : {})
              }
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="App container py-3">

        <Routes />
      </div>
    </>
  );
}

export default App;