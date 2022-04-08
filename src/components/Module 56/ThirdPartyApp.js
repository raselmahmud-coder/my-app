import React from "react";
import app1 from "./firebase-init";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const auth = getAuth(app1);
const googleProvider = new GoogleAuthProvider();
const faceBookProvider = new FacebookAuthProvider();
const microSoftProvider = new OAuthProvider("microsoft.com");
const ThirdPartyApp = () => {
  const handlingMicrosoft = () => {
    signInWithPopup(auth, microSoftProvider)
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err));
  };
  const handlingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err));
  };
  const handlingGithub = () => {};
  const handlingFacebook = () => {
    signInWithPopup(auth, faceBookProvider)
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err));
  };
  const handleSignOut = () => {};
  return (
    <div className="text-center">
      <button className="btn btn-primary m-2" onClick={handleSignOut}>
        Sign out
      </button>
      <button className="btn btn-primary m-2" onClick={handlingMicrosoft}>
        Microsoft Sign-up
      </button>
      <button className="btn btn-primary m-2" onClick={handlingFacebook}>
        FaceBook Sign-up
      </button>
      <button className="btn btn-primary m-2" onClick={handlingGoogle}>
        Google sign-up
      </button>
      <button className="btn btn-primary m-2" onClick={handlingGithub}>
        Github sign-up
      </button>

      {/*       <h1>User Name: {users?.displayName}</h1>
      <h2>Email: {users?.email}</h2>
      <h3>
        is verified:{" "}
        {users.emailVerified === true ? `Yes it's verified` : " not verified"}
      </h3>
      <img src={users.photoURL} alt="" /> */}
    </div>
  );
};

export default ThirdPartyApp;
