"use strict";

const { getCollection, toObjectId } = require("./dbModules");

const entity = "users";
const students = "students";

async function addUser(email, username, password) {
  try {
    const collection = await getCollection(entity);
    const existUsername = await collection.findOne({ username });
    const existUserEmail = await collection.findOne({ email });
    if (existUsername) {
      throw new Error("The username is already exist😢");
    } else if (existUserEmail) {
      throw new Error("The email is already taken😢");
    }
    await collection.insertOne({
      username,
      password,
      email,
      avatar: "",
      isAdmin: false,
      createdAt: new Date().toJSON().slice(0, 10),
    });
    console.log(`User "${username}" have been added successfully`);
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(username, passwordInput) {
  try {
    const collection = await getCollection(entity);
    const user = await collection.findOne({
      username: username,
      password: passwordInput,
    });
    if (!user) throw new Error("Wrong email or password😢");
    const { password, ...restUserDetails } = user;
    return restUserDetails;
  } catch (error) {
    throw error;
  }
}


// async function updatePassword(username, newPassword) {
//   try {
//     const collection = await getCollection(entity);
//     await collection.updateOne(
//       { username: username },
//       { $set: { password: newPassword } }
//     );
//     console.log(`User "${username}" have been changed password successfully`);
//   } catch (error) {
//     console.log(error);
//   }
// }

module.exports = { addUser, getUserByUsername, };
