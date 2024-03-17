import { useState } from "react";
import Button from "./Button";
const HeaderLogo = ({ loggedInUser, handleLogout }) => {
  return (
    <div className="header_logo">
      <div>
        <h1>Students list</h1>
      </div>

      {loggedInUser && (
        <div className="user_and_logout">
          <h3>welcome: {loggedInUser.username}</h3>
          <img
            src={`https://robohash.org/${loggedInUser.username}`}
            className="avater"
          />
          <Button onClick={() => handleLogout()} className="btn_add">
            logout
          </Button>
        </div>
      )}
    </div>
  );
};

export default HeaderLogo;
