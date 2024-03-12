import React from "react";
import { useState } from "react";


const Login = ({ setShowRegister, handleAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAuth(username, password)
  };
  return (
    <div className="login_container">
      <div className="login_divs">
        <div className="img_login">
          <img src="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=651%2Cq=70%2Csharpen=1%2Cwidth=1400/wp-content/uploads/world-student-day1.jpg" />
        </div>
        <div className="from_container">
          <h1>Login</h1>
          <form className="login_form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn-login">Login</button>
          </form>
          <div className="auth-switch">
        <p>
          Don't have an account?{" "}
          <button onClick={() => setShowRegister(true)}>Sign up</button>
        </p>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
