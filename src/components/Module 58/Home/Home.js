import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase-init";

const Home = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="container display-flex justify-center">
      {user ? (
        <div className="card" style={{ width: "18rem" }}>
          <img src={user?.photoURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{user?.displayName}</h5>
            <p className="card-text">{user?.email}</p>
            <span to="#" className="btn btn-primary">
              Go somewhere
            </span>
          </div>
        </div>
      ) : (
        "No Body"
      )}
    </div>
  );
};

export default Home;
