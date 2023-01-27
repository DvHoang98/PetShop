const ForgotPass = () => {
  return (
    <>
      <div className="login_form">
        <div className="container" ng-controller="myController">
          <div className="col-4">
            <form ng-submit="forgotPass($event)">
              <h1 className="center">Forgot Password</h1>
              <br />
              <br />
              <div className="form-outline">
                <input
                  type="email"
                  id="userEmail"
                  className="form-control"
                  placeholder="Email"
                  ng-model="user.email"
                />
              </div>
              <br />

              <div className="form-outline mb-4 center">
                <input
                  type="password"
                  id="userPass"
                  className="form-control"
                  placeholder="Name"
                  ng-model="user.name"
                />
              </div>

              <div className="center">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Get password
                </button>
              </div>
              <div className="center">
                If you dont have Account <a href="#signup">Sign Up</a>
              </div>
              <div className="center">
                Or <a href="#signin">Sign In</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
