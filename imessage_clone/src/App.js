import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import Imessage from "./Components/Imessage/Imessage";
import Login from "./Components/Login/Login";
import { auth } from "./features/firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //user i logged out
        dispatch(logout());
      }
    })
  }, []);

  return <div className="app">{user ? <Imessage /> : <Login />}</div>;
}

export default App;
