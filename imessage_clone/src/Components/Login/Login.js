import React from "react";
import "./Login.css";
import {auth, provider} from "../../features/firebase";
import { Button } from "@material-ui/core";

function Login() {

  const signIn = () => {
    auth.signInWithPopup(provider).catch((error)=> alert(error.messsage));
  }

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://image.flaticon.com/icons/png/512/164/164577.png"
          alt="sign in"
        />
        <h1>Messages</h1>
        <Button onClick={signIn} className="login__button">Sign inn</Button>
      </div>
    </div>
  );
}

export default Login;
