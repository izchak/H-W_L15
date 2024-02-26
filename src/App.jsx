import { useState } from "react"
import Dashboard from "./components/Dashboard"
import FooterStudent from "./components/FooterStudent"
import HeaderLogo from "./components/HeaderLogo"
import students from "./data/students"

const App = ()=> {
  const [studentArr,setStudentArr]=useState(students)

  const updateStudentList=(newStudent)=>{
     setStudentArr([...studentArr, newStudent])
  }
  return (
    <div className="app">
      <div className="content_wrap">
        <HeaderLogo updateList={updateStudentList} />
        <Dashboard listOfStudent={studentArr}/>
      </div>

    <FooterStudent/>
    </div>
  )
}

export default App
