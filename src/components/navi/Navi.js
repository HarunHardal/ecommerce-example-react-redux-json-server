import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import CartSummarry from "../cart/CartSummary";

const Navi = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link to={"/"} id="RouterNavLink" >NORTHWIND APP</Link>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav>
            <NavItem className="mt-2">
                <Link id="RouterNavLink" to={"/saveProduct"}>Product Add</Link>
            </NavItem>
            <CartSummarry />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
