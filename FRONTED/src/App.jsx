import { useState } from "react";
import Dashboard from "./components/Dashboard";
import FooterStudent from "./components/FooterStudent";
import HeaderLogo from "./components/HeaderLogo";
import students from "./data/students";

const App = () => {
  const [studentArr, setStudentArr] = useState(students);
  const [studentInfo, setStudentInfo] = useState(null);

  //update list with new stusent
  const updateStudentList = (newStudent) => {
    setStudentArr([...studentArr, newStudent]);
  };

  // remove student from list
  const removeStudent = (studentID) => {
    const updateStudents = studentArr.filter(
      (student) => student.id !== studentID
    );
    setStudentArr(updateStudents);
  };

  // get info at table of students
  const getInfoStudent = (student) => {
    const studentEdit = {
      id: student.id,
      name: student.name,
      age: student.age,
      major: student.major,
      university: student.university,
      averageGrade: student.averageGrade,
    };
    setStudentInfo(studentEdit);
  };

  // update student info
  const updateStudentInfo=(studentInfoToUpdate)=>{
    let studentAfterUpdate = studentArr.map((student)=>{
      if(student.id === studentInfoToUpdate.id){
        let studentInfoUpdate={
          id: studentInfoToUpdate.id,
          name: studentInfoToUpdate.name,
          age: studentInfoToUpdate.age,
          major: studentInfoToUpdate.major,
          university: studentInfoToUpdate.university,
          averageGrade: studentInfoToUpdate.averageGrade,
        }
        return studentInfoUpdate
      }
      return student
    });
    setStudentArr(studentAfterUpdate)
 
  }

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
        <HeaderLogo
          updateList={updateStudentList}
          studentInfo={studentInfo}
          updateStudentInfo={updateStudentInfo}
          cancelEdit={cancelEdit}
          closeDivAfterAdd={closeDivAfterAdd}
        />
        <Dashboard
          listOfStudent={studentArr}
          removeStudent={removeStudent}
          getInfoStudent={getInfoStudent}
        />
      </div>

      <FooterStudent />
    </div>
  );
};

export default App;
