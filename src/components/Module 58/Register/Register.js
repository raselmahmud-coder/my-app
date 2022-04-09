import React from "react";

const Register = () => {
  return (
      <form className="row g-3 container w-50 mx-auto mt-5">
          <h1>Register Here</h1>
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="inputEmail4" required/>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="inputPassword4" required/>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="inputPassword4" required/>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Register;
