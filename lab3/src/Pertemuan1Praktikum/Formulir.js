import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Formulir() {
  const [show, setShow] = useState(false);
  const [npm, setNpm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Menyimpan nilai dari input ke state
    setNpm(e.target.elements.npm.value);
    setFirstName(e.target.elements.firstName.value);
    setMiddleName(e.target.elements.middleName.value);
    setLastName(e.target.elements.lastName.value);
    setBirthDate(e.target.elements.birthDate.value);

    // Menghitung umur
    const today = new Date();
    const birthDateObj = new Date(e.target.elements.birthDate.value);
    const ageDiff = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      setAge(ageDiff - 1);
    } else {
      setAge(ageDiff);
    }

    handleShow(); // Memunculkan modal setelah nilai disimpan
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="p-3 bg-dark text-white">
        <h1 className="text-center">FORM DATA DIRI</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="p-1 m-3 items-center">NPM</Form.Label>
          <Form.Control
            name="npm"
            type="text"
            placeholder="Enter Number"
            maxLength="10"
            pattern="\d*"
            title="NPM must be numeric"
            required
          />
          <Form.Text className="text-muted"></Form.Text>
          <Form.Label className="p-1 m-3 items-center">First Name</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            placeholder="First Name"
            required
          />
          <Form.Label className="p-1 m-3 items-center">Middle Name</Form.Label>
          <Form.Control
            name="middleName"
            type="text"
            placeholder="Middle Name"
          />
          <Form.Label className="p-1 m-3 items-center">Last Name</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            placeholder="Last Name"
            required
          />
          <Form.Label className="p-1 m-3 items-center">Birthdate</Form.Label>
          <Form.Control
            name="birthDate"
            type="date"
            placeholder="Birthdate"
            required
          />
        </Form.Group>

        <Button variant="primary" className="m-3" type="submit">
          Submit
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Form Result</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            NPM: {npm} <br />
            Name: {firstName} {middleName && middleName + " "} {lastName} <br />
            First Name: {firstName}
            <br />
            Middle Name: {middleName}
            <br />
            Last Name: {lastName}
            <br />
            Birthdate: {birthDate}
            <br />
            Age: {age}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </div>
  );
}

export default Formulir;
