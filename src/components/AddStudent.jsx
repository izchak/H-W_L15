import { useState } from "react"

const AddStudent =(props)=>{
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [major,setMajor]=useState("")
    const [university,setUniversity]=useState("")
    const [averageGrade,setAverageGrade]=useState("")

    const submit=(e)=>{
        e.preventDefault()
        const newStudent={id,name,age,major,university,averageGrade}
        props.addNewStudent(newStudent)
        
    }
    return(
        <div>
            <form className="form" onSubmit={(e)=>submit(e)}>
                <div>
                <label className="id">ID</label>
                <input id="id" onChange={(e)=>setId(e.target.value)}/>
                </div>
                <div>
                <label className="name">Name</label>
                <input id="name"  onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                <label className="age">Age</label>
                <input id="age"  onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <div>
                <label className="major">Major</label>
                <input id="major"  onChange={(e)=>setMajor(e.target.value)}/>
                </div>
                <div>
                <label className="university">University</label>
                <input id="university"  onChange={(e)=>setUniversity(e.target.value)}/>
                </div>
                <div>
                <label className="averge">Averge grade</label>
                <input id="averge"  onChange={(e)=>setAverageGrade(e.target.value)}/>
                </div>
                <div className="btn_add_div">
                <button type="submit">Add</button>
                </div>
            </form>

        </div>
    )
    
}

export default AddStudent