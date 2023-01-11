import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import moment from 'moment'
const EditEmployee = (props) => {
  const { show, handleEditClose, editEmplFun, editData, loggedInUser } = props;

  useEffect(() => {
    setName(editData.name);
    setPhone(editData.phone);
    setEmail(editData.email);
    setPassword(editData.password);
    setDob(moment(editData.dob ? editData.dob : "" ).format("YYYY-MM-DD"));
    setSalary(editData.salary);
    setRole(editData.role);
    setAge(editData.age);
    setAddress(editData.address);
  }, [editData]);

  // Handle input fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [salary, setSalary] = useState("");
  const [role, setRole] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Array of field values
  const employee = () => {
    const data = {
      id: editData._id,
      name: name,
      phone: phone,
      email: email,
      password: password,
      dob: dob,
      salary: salary,
      role: role,
      age: age,
      address: address,
    };
    editEmplFun(data);
  };

  return (
    <>
      <Modal show={show} onHide={handleEditClose}>
        <Modal.Header closeButton className="bg-danger text-white">
          <Modal.Title>{loggedInUser.role !== "Employee" ? "Edit Employee" : "Edit Your Profile"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="p-2">
              <Col>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="name"
                  value={name}
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  name="phone"
                  type="phone"
                  value={phone}
                  placeholder="Enter phone number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="p-2">
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="p-2">
              <Col>
                <Form.Label>DOB</Form.Label>
                <Form.Control
                  name="dob"
                  type="date"
                  placeholder="Enter BOD"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label>Age</Form.Label>
                <Form.Control
                  name="age"
                  type="number"
                  placeholder="Enter age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label>Salary</Form.Label>
                <Form.Control
                  name="salary"
                  type="number"
                  placeholder="Enter Salary"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  disabled={loggedInUser.role !== "Employee" ? false : true}
                />
              </Col>
            </Row>
            <Row className="p-2">
              {loggedInUser && loggedInUser.role !== "Employee" ? (
                <Col>
                <Form.Label>Role</Form.Label>
                <Form.Select
                  aria-label="Floating label select example"
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="1">MD</option>
                  <option value="2">CEO</option>
                  <option value="3">Employee</option>
                </Form.Select>
              </Col>
              ) : ("")}
              
            </Row>
            <Row className="p-2">
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    name="address"
                    as="textarea"
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" type="submit" onClick={employee}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditEmployee;
