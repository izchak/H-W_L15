import React from "react";
import { useRef } from "react";
import { utilService } from "../services/utilService";

const SignUp = ({ setShowRegister, handleAuth }) => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();

    const username = userNameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    if (!username.trim() || !password.trim() || !email.trim()) return;

    handleAuth(username, password, true, email);
  };
  return (
    <div className="login_container">
      <div className="login_divs">
        <div className="img_login">
          <img src="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=651%2Cq=70%2Csharpen=1%2Cwidth=1400/wp-content/uploads/world-student-day1.jpg" />
        </div>
        <div className="from_container">
          <h1>Signup</h1>
          <form className="login_form" onSubmit={handleRegister}>
            <div className="input-wrapper">
              <label htmlFor="email">Email: </label>
              <input type="email" id="email" ref={emailRef} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="username">Username: </label>
              <input type="text" id="username" ref={userNameRef} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password: </label>
              <input type="password" id="password" ref={passwordRef} />
            </div>
            <button className="btn-login">Signup</button>
          </form>
          <div className="auth-switch">
            <p>
              Don't have an account?{" "}
              <button onClick={() => setShowRegister(false)}>Login</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
