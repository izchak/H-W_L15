const StudentsList = ({ students, removeStudent, getInfoStudent }) => {
  if (students) {
    return (
      <table className="students">
        <tbody>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Age</th>
            <th>Major</th>
            <th>University</th>
            <th>Average Grade</th>
            <th></th>
          </tr>
          {students.map((student) => (
            <tr className="student_tr" key={student._id}>
              <td>
                <img
                  src={`https://robohash.org/${student.name}`}
                  className="avater"
                />
              </td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.major}</td>
              <td>{student.university}</td>
              <td>{student.averageGrade}</td>
              <td>
                <button
                  className="btn_add"
                  onClick={() => removeStudent(student._id)}
                >
                  Remove
                </button>
                <button
                  className="btn_add"
                  onClick={() => getInfoStudent(student)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

export default StudentsList;
