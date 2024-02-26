const StudentsList=(props)=>{
    return(
        <table className="students">
            <tbody>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Major</th>
                <th>University</th>
                <th>Average Grade</th>
                </tr>

            {props.students.map((student)=>(
                <tr className="student_tr" key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.major}</td>
                    <td>{student.university}</td>
                    <td>{student.averageGrade}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default StudentsList