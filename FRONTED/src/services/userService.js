import { storageService } from "./storageService";
// import axios from "axios"

async function createUser(username, email, password) {
  try {
    const response = await makeFetchRequest(
      "http://127.0.0.1:5000/api/register",
      "POST",
      {
        email,
        username,
        password,
      }
    );
    if (!response.success) {
      alert(response.message);
      return;
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

async function login(username, password) {
  try {
    const response = await makeFetchRequest(
      "http://127.0.0.1:5000/api/login",
      "POST",
      {
        username,
        password,
      }
    );
    if (!response.success) {
      alert(response.message);
      return;
    }
    storageService.saveLoggedInUser(response.user);
    // if (response.user.isAdmin === true) {
    // }
  } catch (error) {
    console.log(error);
  }
}

function logout() {
  storageService.clearAll();
}

async function makeFetchRequest(url, method = "GET", body = null) {
  const response = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : null,
  });
  return response.json();
}

async function createStudents(studentList) {
  try {
    const response = await makeFetchRequest(
      "http://127.0.0.1:5000/api/insertStudents",
      "POST",
      {
        name: studentList.name,
        age: studentList.age,
        major: studentList.major,
        university: studentList.university,
        averageGrade: studentList.averageGrade,
      }
    );

    if (!response.success) {
      alert(response.message);
      return;
    }

    alert("student have been added successfully");
    return response.success;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

async function loadStudents() {
  try {
    const response = await makeFetchRequest(
      "http://127.0.0.1:5000/api/students"
    );
    const students = response.students;
    return students;
  } catch (error) {
    console.log(error);
  }
}
async function removeStundent(id) {
  try {
    const response = await makeFetchRequest(
      "http://127.0.0.1:5000/api/deleteUser",
      "POST",
      { id }
    );

    if (!response.success) {
      alert(response.message);
      return;
    }
    return response.success;
  } catch (error) {
    console.log;
  }
}

async function updateStudent(id, name, age, major, university, averageGrade) {
  try {
    const response = await makeFetchRequest(
      "http://127.0.0.1:5000/api/updateStudent",
      "POST",
      { id, name, age, major, university, averageGrade }
    );

    if (!response.success) {
      alert(response.message);
      return;
    }
    return response.success;
  } catch (error) {
    console.log;
  }
}

export const userService = {
  createUser,
  login,
  logout,
  makeFetchRequest,
  loadStudents,
  createStudents,
  removeStundent,
  updateStudent,
};

// async function fetchAvatar(username) {
//   try {
//     const URL = `https://robohash.org/${username}`;
//     const res = await fetch(URL);
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function fetchAvatar(username = "shoshi") {
//   try {
//     const URL = `https://yesno.wtf/api`;
//     //? GET with fetch
//     // const response = await fetch(URL)
//     // const data = await response.json()

//     //? POST with fetch:
//     const fetchDataWithFetch = await fetch(URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: { data: "I am a body" },
//     });

//     const data1 = await fetchDataWithFetch.json();

//     // //? GET with axios
//     // // const { data } = await axios.get(URL)

//     // //? POST with axios:
//     // const fetchDataWithAxios = await axios.put(
//     //   `${URL}?username=shoshi&isAdmin=true`,
//     //   { data: "I Am a body" }
//     // )
//     const { data } = fetchDataWithAxios;
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }
