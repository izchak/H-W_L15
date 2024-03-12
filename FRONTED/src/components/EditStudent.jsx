import { useState } from "react";

const EditStudent = ({ studentInfo, updateStudentInfo, closeDivAfterAdd }) => {
  const [id, setId] = useState(studentInfo.id);
  const [name, setName] = useState(studentInfo.name);
  const [age, setAge] = useState(studentInfo.age);
  const [major, setMajor] = useState(studentInfo.major);
  const [university, setUniversity] = useState(studentInfo.university);
  const [averageGrade, setAverageGrade] = useState(studentInfo.averageGrade);

  const sumbitEdit = (e) => {
    e.preventDefault();
    const updataStudent = { id, name, age, major, university, averageGrade };
    updateStudentInfo(updataStudent);
    closeDivAfterAdd();
  };

  //chack if state of student info chenge, if is change is update set functions

  const chackIfChangedStudentInfo = studentInfo.id;

  if (id !== chackIfChangedStudentInfo) {
    setId(studentInfo.id);
    setName(studentInfo.name);
    setAge(studentInfo.age);
    setMajor(studentInfo.major);
    setUniversity(studentInfo.university);
    setAverageGrade(studentInfo.averageGrade);
  }

  return (
    <div className="edit_user_div">
      <form className="form" onSubmit={(e) => sumbitEdit(e)}>
        <div>
          <label className="name">Name</label>
          <input
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label className="age">Age</label>
          <input
            id="age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </div>
        <div>
          <label className="major">Major</label>
          <input
            id="major"
            onChange={(e) => setMajor(e.target.value)}
            value={major}
          />
        </div>
        <div>
          <label className="university">University</label>
          <input
            id="university"
            onChange={(e) => setUniversity(e.target.value)}
            value={university}
          />
        </div>
        <div>
          <label className="averge">Averge grade</label>
          <input
            id="averge"
            onChange={(e) => setAverageGrade(e.target.value)}
            value={averageGrade}
          />
        </div>
        <div className="btn_add_div">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
