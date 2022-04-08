import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav classNameName="bg-dark">
      <ul className="nav justify-content-center">
        <li className="nav-item bg-warning me-2">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item bg-warning me-2">
          <Link className="nav-link" to="/login">
            Log in
          </Link>
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
