import React from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeleteModal = (props) => {
  const { show, handleClose, deleteData, deleteApi } = props;

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="p-2 justify-content-center">{deleteData && deleteData.name}</Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" type="submit" onClick={deleteApi}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
