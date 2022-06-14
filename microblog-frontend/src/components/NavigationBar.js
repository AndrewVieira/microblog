import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavigationBar = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand href="/">Microblog</Navbar.Brand>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
