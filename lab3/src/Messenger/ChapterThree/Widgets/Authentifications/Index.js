import React, { useState } from "react";

export default function Authentifications() {
  //   const uname = "Febry";
  //   const pwd = "PWL@302";
  //   const [username, setUsername] = useState(uname);
  //   const [password, setPassword] = useState(pwd);

  //   const middleware_uri = process.env.REACT_APP_MIDDLEWARE_URL;

  //   const [signin, setSignIn] = useState({loading: false, data: [], message: ""});

  //   const HandlerSignIn = (e) => {
  //     e.preventDefault();
  //     setSignIn({loading: true, data: [], message:""});
  //     if(username && password){
  //         POST_SIGN_IN({username: username, password: password});
  //     } else {
  //         alert("Please fill up field with correct data")
  //     }
  //   }

  //   const POST_SIGN_IN = (param) => {
  //     setSignIn({loading: true, data: [], message: ""});
  //     let config = {
  //         met
  //     }
  //   }

  return (
    <div className="d-flex justify-content-center bg-primary vh-100 py-4">
      <main classNameName="form-signin w-50 m-auto p-4 m-4">
        <form className="bg-white p-4 m-4 rounded-2">
          <h1 className="h3 mb-3 fw-normal text-center">Sign In</h1>
          <h4 className="text-secondary text-center mb-3">
            {" "}
            enter using your IBIK account
          </h4>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
        </form>
      </main>
      <script
        src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}
