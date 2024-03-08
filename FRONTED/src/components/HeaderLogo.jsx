import { useState } from "react";
import AddStudent from "./AddStudent";
import Button from "./Button";
import EditStudent from "./EditStudent";

const HeaderLogo = ({
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
    <div className="header_logo">
      <h1>Students list</h1>
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
  );
};

export default HeaderLogo;
