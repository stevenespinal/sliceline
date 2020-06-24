import {useState, useEffect} from "react";

const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

export function useAuthentication() {
  const [authenticated, setAuthenticated] = useState('loading');


  function login() {
    auth.signInWithPopup(provider);
  }

  function logout() {
    auth.signOut();
  }

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        setAuthenticated(user);
      } else {
        setAuthenticated(null);
      }
    }, error => {
      console.error(error);
    });

  }, [])

  return {login, loggedIn: authenticated, logout}
}