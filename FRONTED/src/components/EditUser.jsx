import React from "react";
import { useState } from "react";
import Button from "./Button";
import { storageService } from "../services/storageService";

const EditUser = ({ userInfo, updateUserInfo, setClickdEdit, setUsers }) => {
  const id = userInfo.id;
  const avatar = userInfo.avatar;
  const createdAt = userInfo.createdAt;

  const [username, setUsername] = useState(userInfo.username);
  const [password, setPassword] = useState(userInfo.password);
  const [email, setEmail] = useState(userInfo.email);
  const [isAdmin, setIsAdmin] = useState(userInfo.isAdmin);

  const sumbitEdit = (e) => {
    e.preventDefault();
    const updataUser = {
      id,
      username,
      password,
      email,
      avatar,
      isAdmin,
      createdAt,
    };
    updateUserInfo(updataUser);
    setClickdEdit(false);
  };

  //chack if state of student info chenge, if is change is update set functions

  const chackIfChangedUsertInfo = userInfo.id;

  if (id !== chackIfChangedUsertInfo) {
    setUsername(userInfo.username);
    setPassword(userInfo.password);
    setEmail(userInfo.email);
    setIsAdmin(userInfo.isAdmin);
  }
  return (
    <div className="edit_user">
      <form className="form" onSubmit={(e) => sumbitEdit(e)}>
        <div>
          <label className="username">Username</label>
          <input
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div>
          <label className="Password">Password</label>
          <input
            id="assword"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <label className="emil">Email</label>
          <input
            id="emil"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label className="is_admin">Is Admin: {isAdmin}</label>
          <select onChange={(e) => setIsAdmin(e.target.value)}>
          <option></option>
            <option value={false}>False</option>
            <option value={true}>True</option>
          </select>
        </div>
        <div className="btns_edit_and_cancel_div">
          <button type="submit">Save</button>
          <button onClick={() => setClickdEdit(false)}>cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
