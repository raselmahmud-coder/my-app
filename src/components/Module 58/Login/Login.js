import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../firebase-init';
const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
        <form className="row g-3 container w-50 mx-auto mt-5" onSubmit={(e)=>{e.preventDefault()}}>
            <h1>Log in here</h1>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              Remember Me
            </label>
          </div>
        </div>
        <div className="col-6">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
          <button className="btn btn-primary ms-2" onClick={()=>signInWithGoogle()}>Google Sign in</button>
        </div>
      </form>
    );
};

export default Login;