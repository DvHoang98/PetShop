import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailUser = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [detailUser, setDetailUser] = useState([]);

  useEffect(() => {
    axios
      .get(`https://6348f539a59874146b14659c.mockapi.io/users/${id}`)
      .then((res) => {
        let data = res && res.data ? res.data : [];
        setDetailUser(data);
      });
  }, []);


  const handleBack = () => {
    navigate("/user");
  };

  return (
    <>
      <h1>Detail User {id}</h1>
      <button onClick={handleBack}>Back</button>
        <label>Name: {detailUser.name}</label>

    </>
  );
};
export default DetailUser;
