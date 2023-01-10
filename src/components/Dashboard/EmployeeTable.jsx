import React, { Fragment, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
const EmployeeTable = (props) => {
  const { list, handleDelete, editModal, loggedInUser } = props;

  const [role, setRole] = useState("");
  const [currentUserId, setCurrentUserId] = useState("");

  useEffect(() => {
    setRole(loggedInUser.role);
    setCurrentUserId(loggedInUser._id);
  }, [loggedInUser]);

  const DeleteEmployee = (id, name) => {
    handleDelete(id, name);
  };
 
  return (
    <Fragment>
      <Container>
        <Table striped hover responsive>
          <thead>
            <tr>
              <th>SlNo</th>
              <th>Name</th>
              <th>Emain</th>
              <th>Phone</th>
              <th>Role</th>
              <th>BOD</th>
              <th>Age</th>
              <th>Salary</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {role && (role === "MD" || role === "CEO")
              ? list.map((data, index) => {
                  return (
                    <tr key={data._id}>
                      <td>{index}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.phone}</td>
                      <td>{data.role}</td>
                      <td>{data.dob}</td>
                      <td>{data.age}</td>
                      <td>&#8377;{data.salary}</td>
                      <td>{data.address}</td>
                      <td style={{ cursor: "pointer" }}>
                        <span className="p-2 cursor:pointer">
                          <FaEdit onClick={() => editModal(data)} />
                        </span>
                        <span>
                          <FaTrash
                            onClick={() => DeleteEmployee(data._id, data.name)}
                          />
                        </span>
                      </td>
                    </tr>
                  );
                })
              : list.map((data, index) => {
                  return (
                    <tr key={data._id}>
                      {data._id == currentUserId ? (
                        <>
                          <td>{1}</td>
                          <td>{data.name}</td>
                          <td>{data.email}</td>
                          <td>{data.phone}</td>
                          <td>{data.role}</td>
                          <td>{data.dob}</td>
                          <td>{data.age}</td>
                          <td>&#8377;{data.salary}</td>
                          <td>{data.address}</td>
                          <td style={{ cursor: "pointer" }}>
                            <span className="p-2 cursor:pointer">
                              <FaEdit onClick={() => editModal(data)} />
                            </span>
                            {/* <span>
                              <FaTrash
                                onClick={() =>
                                  DeleteEmployee(data._id, data.name)
                                }
                              />
                            </span> */}
                          </td>
                        </>
                      ) : (
                        ""
                      )}
                    </tr>
                  );
                })}
          </tbody>
        </Table>
      </Container>
    </Fragment>
  );
};

export default EmployeeTable;
