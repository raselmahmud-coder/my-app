import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase-init";
const Header = () => {
  const [ user] = useAuthState(auth);
  return (
    <nav className="bg-dark">
      <ul className="nav justify-content-center">
        <li className="nav-item bg-warning me-2">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item bg-warning me-2">
          {user?.uid && <span>{user.displayName}</span>}
          {user?.uid ? (
            <Link className="nav-link" to={"/register"} onClick={()=>signOut(auth)}>
              Log Out
            </Link>
          ) : (
            <Link className="nav-link" to="/login">
              Log in
            </Link>
          )}
        </li>
        <li className="nav-item bg-warning me-2">
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
        <li className="nav-item bg-warning me-2">
          <Link className="nav-link" to="/orders">
            Orders
          </Link>
        </li>
        <li className="nav-item bg-warning me-2 shadow-lg">
          <Link className="nav-link" to="/review">
            Review
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
