import React, { useState, useEffect } from "react";

import Decider from "./Decider"
import Login from "./Login";
import { fire } from "./firebase.jsx";
import Customer from "./Customer";



function App() {
  const [user, setUser] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [signInEmailError, setSignInEmailError] = useState("");
  const [signInPasswordError, setSignInPasswordError] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [signUpButton, setSignUpButton] = useState(true);
  const [userNull, setUserNull] = useState(false);
const [admin, setAdmin] = useState(false)

  const clearInputs = () => {
    setSignUpButton(true);
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(signInEmail, signInPassword)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setSignInEmailError(err.message);
            break;
          default:
          case "auth/wrong-password":
            setSignInPasswordError(err.message);
        }
      });
  };

  const handleSignup = () => {
    clearInputs();
    clearErrors();

 
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser);
        return authUser.user.updateProfile({
          displayName: userName,
        });
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          default:
          case "auth/weak-password":
            setPasswordError(err.message);
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        if (authUser.email=="shivquasiparticle@gmail.com")
        {
          console.log(authUser.email);
          setUser(authUser);
          setAdmin(true);
        }
        else {
          console.log(authUser.email);
          setUser(authUser);
          setAdmin(false)
        }
       
      } else {
        setUser(null);
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);

  function renderAdmin_renderCustomer() {
    if (admin == true){
      return <h1>you Are logged in as admin</h1>
    }
    else { 
     return <Customer handleLogout={handleLogout}/>
    }
  }

  return (
    <div>
      {user ? ( 

      renderAdmin_renderCustomer()
          
        )
       : (
        <Login
          userNull={userNull}
          setUserNull={setUserNull}
          userNameError={userNameError}
          signInEmailError={signInEmailError}
          setSignInEmailError={setSignInEmailError}
          signInPasswordError={signInPasswordError}
          setSignInPasswordError={setSignInPasswordError}
          signInEmail={signInEmail}
          setSignInEmail={setSignInEmail}
          signInPassword={signInPassword}
          setSignInPassword={setSignInPassword}
          userName={userName}
          setUserName={setUserName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          signUpButton={signUpButton}
          setSignUpButton={setSignUpButton}
        />
      )}

    </div>
  );
}

export default App;
