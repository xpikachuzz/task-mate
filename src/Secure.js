/*App.js*/

import { useState, useEffect } from "react";
import {
  googleLogout,
  useGoogleLogin,
} from "@react-oauth/google";
import axios from "axios";
import "./Secure.css";

function Secure({ profile, setProfile, tasklist }) {
  const [user, setUser] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };



  return (
    <div className="section-login">
      {profile ? (
        <div>
          <p><b>LOGGED IN:</b></p>
          <img src={profile.picture} alt="user_image" />
          <p><b>Name:</b> {profile.name}</p>
          <p><b>Email Address:</b> {profile.email}</p>
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      )}
    </div>
  );
}

export default Secure;
