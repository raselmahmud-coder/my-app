import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import fireBaseApp from "../firebase-init";

const auth = getAuth(fireBaseApp);
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((res) => {
                setUser(res.user)
                console.log('from firebase ', res.user)
            })
            .catch((err) => console.log(err));
    
    };
    const handleSignOut = () => {
        signOut(auth)
        .then(()=>{})
}
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    },[])
  return { user,handleSignOut, signInWithGoogle };
};
export { useFirebase };
