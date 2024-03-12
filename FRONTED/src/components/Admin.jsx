import React from "react";
import { storageService } from "../services/storageService";
import { useState } from "react";
import { useEffect } from "react";
import EditUser from "./EditUser";

//userInfo, updateUserInfo, closeEditUser

const Admin = () => {
  const [users, setUsers] = useState(false);
  const [clickdEdit, setClickdEdit] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      const loadedUsers = await storageService.getUsers();
      setUsers(loadedUsers);
    };

    loadUsers();
  }, []);


  const removeUserFromList = (userId) => {
    const usersList = users.filter((user) => user.id !== userId);
    storageService.saveUsers(users);
    setUsers(usersList);
  };

  const getInfoUser = (user) => {
    const UserEdit = {
      id: user.id,
      username: user.username,
      password: user.password,
      email: user.email,
      avatar: user.avatar,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
    };
    setUserInfo(UserEdit);
    setClickdEdit(true);
  };

  const updateUserInfo = (userInfoToUpdate) => {
    let userAfterUpdate = users.map((user) => {
      if (user.id === userInfoToUpdate.id) {
        let userInfoUpdate = {
          id: userInfoToUpdate.id,
          username: userInfoToUpdate.username,
          password: userInfoToUpdate.password,
          email: userInfoToUpdate.email,
          avatar: userInfoToUpdate.avatar,
          isAdmin: userInfoToUpdate.isAdmin,
          createdAt: userInfoToUpdate.createdAt,
        };
        return userInfoUpdate;
      }
      return user;
    });
    storageService.saveUsers(userAfterUpdate);
    setUsers(userAfterUpdate);
  };

  if (users) {
    return (
      <>
        <h1>Users</h1>

        {clickdEdit ? (
          <EditUser
            userInfo={userInfo}
            getInfoUser={getInfoUser}
            setClickdEdit={setClickdEdit}
            updateUserInfo={updateUserInfo}
            setUsers={setUsers}
          />
        ) : null}
        <table className="users">
          <tbody>
            <tr>
              <th></th>
              <th>Username</th>
              <th>Password</th>
              <th>Email</th>
              <th>Is Admin</th>
              <th>createdAt</th>
            </tr>

            {users.map((user) => (
              <tr className="user_tr" key={user.id}>
                <td>
                  <img
                    className="user_avatar"
                    src={`https://robohash.org/${user.username}`}
                  />
                </td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>{String(user.isAdmin)}</td>
                <td>{user.createdAt}</td>
                <td>
                  <button
                    className="btns_admin_table"
                    onClick={() => removeUserFromList(user.id)}
                  >
                    Remove
                  </button>
                  <button
                    className="btns_admin_table"
                    onClick={() => getInfoUser(user)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
};

export default Admin;
