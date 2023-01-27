import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {loginUser} from "../../store/actions/loginAction"
import { useParams, useNavigate } from "react-router-dom";

const Login = () => {

  const [userName, setUserName] = useState([]);
  const [password, setPassword] = useState([]);

  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let loginData ={
      username: userName,
      password: password
    }
    axios
      .post("http://localhost:8080/login", loginData)
      .then((res) => {
        setData({
          ...data,
          loginData,
        });
        console.log(res.data);
        if(res.data.success ==false){
          alert("Login false");
        }else{
        const addInfoLogin = loginUser(res.data.data)
        dispatch(addInfoLogin);
        navigate("/home");
        console.log(res.data.data)
        }
      });
  }

  return (
    <>
      <div className="login_form">
        <div className="container">
          <div className="col-4">
            <form onSubmit={handleSubmit}>
              <h1 className="center">Login</h1>
              <br />
              <br />
              <div className="form-outline">
                <input
                  type="text"
                  id="userEmail"
                  className="form-control"
                  placeholder="UserName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <br />

              <div className="form-outline mb-4 center">
                <input
                  type="password"
                  id="userPass"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="row mb-4" style={{ marginTop: "100px" }}>
                <div className="col d-flex justify-content-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
                    />
                    <label className="form-check-label" htmlFor="form2Example31">
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="col">
                  <a href="#forgotpass">Forgot password?</a>
                </div>
              </div>
              <div className="center">
                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Sign in
                </button>
              </div>
              <div className="center">
                If you dont have Account <a href="#signup">Sign Up</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
