import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import WebCookies from "../../Cookies/cookies";
import Logo from "../../assets/logo.png";

const NavBar = (props) => {
  const [loggedInUser, setLogined] = useState([]);

  // navigate hook
  const navigate = useNavigate();

  useEffect(() => {
    let userCookie = [];
    userCookie = WebCookies.GetCookie("userin");
    setLogined(JSON.parse(userCookie));
  }, []);

  // logout
  const handleLogout = () => {
    WebCookies.RemoveCookie("userin");
    navigate("/");
  };

  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />{" "}
          MyCLNQ Health
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            {loggedInUser && loggedInUser.role !== "Employee" ? (
              <Nav.Link href="/employees">Employees</Nav.Link>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
        {loggedInUser ? (
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/employees">{loggedInUser.name}</Nav.Link>
              <Button
                style={{ float: "right", border: "1px solid white" }}
                variant="ligth"
                size="sm"
                onClick={handleLogout}
              >
                Log out
              </Button>
            </Nav>
          </Navbar.Collapse>
        ) : (
          ""
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
