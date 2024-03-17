import { useState } from "react";
import StudentsList from "./StudentsList";
import AddStudent from "./AddStudent";
import Button from "./Button";
import EditStudent from "./EditStudent";
import Admin from "./Admin";

const Dashboard = ({
  loggedInUser,
  listOfStudent,
  removeStudent,
  getInfoStudent,
  updateList,
  studentInfo,
  updateStudentInfo,
  cancelEdit,
  closeDivAfterAdd,
}) => {
  const [islcickd, setIsclickd] = useState(false);
  const [add, setAdd] = useState("Add student");
  
  function addUserBtn() {
    if (islcickd === false) {
      setIsclickd(true);
      setAdd("Cancel");
    } else {
      setIsclickd(false);
      setAdd("Add student");
    }
  }

  if (islcickd === true && studentInfo) {
    setIsclickd(false);
    setAdd("Add student");
  }
  return (
    <>
      <div className="add_student_div">
        {islcickd && <AddStudent addNewStudent={updateList} />}
        {!studentInfo && (
          <Button onClick={() => addUserBtn()} className="btn_add">
            {add}
          </Button>
        )}

        {studentInfo && (
          <EditStudent
            studentInfo={studentInfo}
            updateStudentInfo={updateStudentInfo}
            closeDivAfterAdd={closeDivAfterAdd}
          />
        )}
        {studentInfo && (
          <Button onClick={() => cancelEdit()} className="btn_add">
            Cancel
          </Button>
        )}
      </div>

      <div className="student_table">
        <StudentsList
          students={listOfStudent}
          removeStudent={removeStudent}
          getInfoStudent={getInfoStudent}
        />
      </div>

      <div className="user_table">
        {loggedInUser.isAdmin && <Admin/>}
      </div>
    </>
  );
};
export default Dashboard;
