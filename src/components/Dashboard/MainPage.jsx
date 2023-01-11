import React, { Fragment, useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AddEmployee from "../modals/EmployeesAddModal";
import EmployeeTable from "./EmployeeTable";
import DeleteModal from "../modals/DeleteModal";
import EmployeeApi from "../../Service/employeeApi";
import EditEmployee from "../modals/EditEmployeeModal";
import WebCookies from "../../Cookies/cookies";

const MainPage = (props) => {
  const [show, setShow] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditeModal] = useState(false);

  const [list, setList] = useState([]);
  const [deleteData, setDeletData] = useState("");
  const [editData, setEditData] = useState("");
  const [loggedInUser, setLogined] = useState([]);

  // Add Employee modal Toogle
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Delete modal Toogle
  const handleDeleteModaClose = () => {
    setDeletData();
    setShowDeleteModal(false);
  };
  const handleDeleteModalShow = () => setShowDeleteModal(true);

  // Edit employee modal Toogle
  const handleEditClose = () => {
    setEditData("");
    setShowEditeModal(false);
  };
  const handleEditShow = () => setShowEditeModal(true);

  useEffect(() => {
    let userCookie = [];
    userCookie = WebCookies.GetCookie("userin");
    setLogined(JSON.parse(userCookie));
    // get all employees list
    getEmployess(setList);
  }, []);

  const getEmployess = (setList) => {
    EmployeeApi.GetEmployee(setList);
  };

  // Handle create employee
  const createEmplFun = (data) => {
    handleClose();
    EmployeeApi.CreateEmployee(data, () => {
      getEmployess(setList);
    });
  };

  // Handle delete employee
  const handleDelete = (id, name) => {
    const data = {
      id: id,
      name: name,
    };
    setDeletData(data);
    handleDeleteModalShow();
  };

  // Calling delee api
  const deleteApi = () => {
    EmployeeApi.DeleteEmployee(deleteData.id, () => {
      handleDeleteModaClose();
      getEmployess(setList);
      setDeletData();
    });
  };

  // Edit modal toogle
  const handleEdit = (data) => {
    setEditData(data);
    if (data) {
      handleEditShow();
    }
  };

  // Handle update api
  const editEmplFun = (data) => {
    EmployeeApi.UpdateEmployee(data.id, data, () => {
      handleEditClose();
      getEmployess(setList);
    });
  };

  return (
    <Fragment>
      <Container className="justify-content-md-center">
        <Row className="justify-content-md-center mt-4 bg-info p-2">
          <Col className="text-dark">
            {loggedInUser && loggedInUser.role !== "Employee" ? (
              <span className="fw-bold">Employees</span>
            ) : (
              <span>Your Profile</span>
            )}
          {/* </Col> */}
          {/* <Col> */}
            {loggedInUser && loggedInUser.role !== "Employee" ? (
              <Button
                style={{ float: "right", border: "1px solid black" }}
                variant="ligth"
                size="sm"
                onClick={handleShow}
              >
                + Add Employee
              </Button>
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row className="mt-3">
          <EmployeeTable
            loggedInUser={loggedInUser}
            list={list}
            handleDelete={(id, name) => handleDelete(id, name)}
            editModal={(data) => handleEdit(data)}
          />
        </Row>
      </Container>

      <DeleteModal
        deleteData={deleteData}
        show={showDeleteModal}
        handleClose={handleDeleteModaClose}
        deleteApi={deleteApi}
      />

      <AddEmployee
        show={show}
        handleClose={handleClose}
        createEmplFun={(e) => createEmplFun(e)}
      />

      <EditEmployee
        loggedInUser={loggedInUser}
        show={showEditModal}
        editData={editData}
        handleEditClose={handleEditClose}
        editEmplFun={(e) => editEmplFun(e)}
      />
    </Fragment>
  );
};

export default MainPage;
