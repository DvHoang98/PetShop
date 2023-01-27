import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddNewUser from "./AddNewUser";

const ListUser = () => {
  const [dataUser, setDataUser] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get("https://6348f539a59874146b14659c.mockapi.io/users")
      .then((res) => {
        let data = res && res.data ? res.data : [];
        setDataUser(data);
      });
  }, []);

  const handleAddNew = (user) => {
    setShow(false);
    setDataUser([...dataUser, user]);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewUser handleAddNew={handleAddNew} />
        </Modal.Body>
      </Modal>

      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {dataUser &&
            dataUser.length > 0 &&
            dataUser.map((item) => {
              return (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button className="btn btn-primary">
                      <Link to={`/user/${item.id}`}>Edit</Link>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
export default ListUser;
