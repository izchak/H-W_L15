import StudentsList from "./StudentsList"


const Dashboard=(props)=>{
    console.log(props.listOfStudent)
    return(
        <div className="student_table">
        <StudentsList students={props.listOfStudent}/>
        </div>
    )
}
export default Dashboard