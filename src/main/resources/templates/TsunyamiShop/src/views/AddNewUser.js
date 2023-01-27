import { useState } from "react";
import axios from "axios";

const AddNewUser = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      id: 1,
      email: email,
      name: name,
    };
    axios
      .post("https://6348f539a59874146b14659c.mockapi.io/users", data)
      .then((res) => {
        props.handleAddNew(res.data);
      });

  };

  
  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <br />
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Name</label>
      <br />
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input type="submit" className="btn btn-primary" value="Send" />
    </form>
  );
};

export default AddNewUser;
