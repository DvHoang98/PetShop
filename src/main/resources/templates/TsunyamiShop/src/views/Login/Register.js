const Register = () => {
  return (
    <>
      <div className="login_form">
        <div className="container" ng-controller="myController">
          <div className="col-4">
            <h1 className="center">Register</h1>
            <br />
            <br />
            <form className="mx-1 mx-md-4" ng-submit="register($event)">
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="text"
                    id="userName"
                    className="form-control"
                    placeholder="Your name"
                    ng-model="user.name"
                  />
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="email"
                    id="userEmail"
                    className="form-control"
                    placeholder="Your email"
                    ng-model="user.email"
                  />
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="password"
                    id="userPass"
                    className="form-control"
                    placeholder="Your password"
                    ng-model="user.pass"
                  />
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="password"
                    id="userPass2"
                    className="form-control"
                    placeholder="Confirm your password"
                    ng-model="userPass2"
                  />
                </div>
              </div>

              <div className="form-check d-flex justify-content-center mb-5">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3c"
                />
                <label className="form-check-label" for="form2Example3">
                  I agree all statements in <a href="#!">Terms of service</a>
                </label>
              </div>

              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ marginRight: "30px" }}
                >
                  Register
                </button>
              </div>
            </form>
            <div className="center">
              If you have account <a href="#signin">Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
