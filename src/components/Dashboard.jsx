import StudentsList from "./StudentsList";

const Dashboard = ({ listOfStudent, removeStudent, getInfoStudent }) => {
  return (
    <div className="student_table">
      <StudentsList
        students={listOfStudent}
        removeStudent={removeStudent}
        getInfoStudent={getInfoStudent}
      />
    </div>
  );
};
export default Dashboard;
