import React from "react";

const Register = () => {
  return (
      <form class="row g-3 container w-50 mx-auto mt-5">
          <h1>Register Here</h1>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">
          Email
        </label>
        <input type="email" class="form-control" id="inputEmail4" required/>
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">
          Name
        </label>
        <input type="text" class="form-control" id="inputPassword4" required/>
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">
          Password
        </label>
        <input type="password" class="form-control" id="inputPassword4" required/>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Register;
