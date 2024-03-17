import { useState } from "react";
import { useEffect } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import FooterStudent from "./components/FooterStudent";
import HeaderLogo from "./components/HeaderLogo";

import { userService } from "./services/userService";
import { storageService } from "./services/storageService";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [studentArr, setStudentArr] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null);

  useEffect(() => {
    const loggedInUser = storageService.getLoggedInUser();

    if (loggedInUser) {
      setLoggedInUser(loggedInUser);
    }
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const data = await userService.loadStudents();
      setStudentArr(data);
    };

    loadData();
  }, []);

  const handleAuth = (username, password, isRegister = false, email = "") => {
    if (isRegister) {
      // register
      userService.createUser(username, email, password);
      setShowRegister(false);
    } else {
      // login
      const user = userService.login(username, password);
      if (!user) {
        alert("Invalid credentials");
        setShowRegister(true);
        return;
      }

      setLoggedInUser(user);
    }
  };

  const handleLogout = () => {
    userService.logout();
    setLoggedInUser(null);
  };

  //----------------------------------------------

  //update list with new stusent
  const updateStudentList = async (newStudent) => {
    const response = await userService.createStudents(newStudent);
    if (response) {
      console.log(response._id);
      setStudentArr([...studentArr, newStudent]);
    }
  };

  // remove student from list
  const removeStudent = async (studentID) => {
    const response = await userService.removeStundent(studentID);
    if (response) {
      const updateStudents = studentArr.filter(
        (student) => student._id !== studentID
      );
      setStudentArr(updateStudents);
    }
  };

  // get info at table of students
  const getInfoStudent = (student) => {
    const studentEdit = {
      id: student._id,
      name: student.name,
      age: student.age,
      major: student.major,
      university: student.university,
      averageGrade: student.averageGrade,
    };
    setStudentInfo(studentEdit);
  };

  // update student info
  const updateStudentInfo = async (studentInfoToUpdate) => {
    const response = await userService.updateStudent(
      studentInfoToUpdate.id,
      studentInfoToUpdate.name,
      studentInfoToUpdate.age,
      studentInfoToUpdate.major,
      studentInfoToUpdate.university,
      studentInfoToUpdate.averageGrade
    );
    if (response) {
      let studentAfterUpdate = studentArr.map((student) => {
        if (student._id === studentInfoToUpdate.id) {
          let studentInfoUpdate = {
            id: studentInfoToUpdate.id,
            name: studentInfoToUpdate.name,
            age: studentInfoToUpdate.age,
            major: studentInfoToUpdate.major,
            university: studentInfoToUpdate.university,
            averageGrade: studentInfoToUpdate.averageGrade,
          };
          return studentInfoUpdate;
        }
        return student;
      });
      setStudentArr(studentAfterUpdate);
    }
  };

  //close div of edit student, cancel btn
  function cancelEdit() {
    setStudentInfo(null);
  }

  //close div of edit student, after click update
  function closeDivAfterAdd() {
    setStudentInfo(null);
  }

  return (
    <div className="app">
      <div className="content_wrap">
        {loggedInUser ? (
          <HeaderLogo loggedInUser={loggedInUser} handleLogout={handleLogout} />
        ) : null}

        {!loggedInUser ? (
          showRegister ? (
            <SignUp handleAuth={handleAuth} setShowRegister={setShowRegister} />
          ) : (
            <Login handleAuth={handleAuth} setShowRegister={setShowRegister} />
          )
        ) : (
          <Dashboard
            loggedInUser={loggedInUser}
            updateList={updateStudentList}
            studentInfo={studentInfo}
            updateStudentInfo={updateStudentInfo}
            cancelEdit={cancelEdit}
            closeDivAfterAdd={closeDivAfterAdd}
            listOfStudent={studentArr}
            removeStudent={removeStudent}
            getInfoStudent={getInfoStudent}
          />
        )}
      </div>

      <FooterStudent />
    </div>
  );
};

export default App;
