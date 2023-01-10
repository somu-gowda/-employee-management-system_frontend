import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "../Layouts/NavBar";
import MainPage from "./MainPage";

const Employees = () => {
  return (
    <Fragment>
      <Row>
        <Col>
          <NavBar />
          <MainPage />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Employees;
