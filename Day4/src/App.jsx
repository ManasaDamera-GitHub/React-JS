import { StudentData } from "./data/studentData"
const StudentTable=()=>{

  const TodayClassAttendees=StudentData.filter(student=>student.isPresent)

  return (
  <table border={1} cellSpacing={10} style={{textAlign:"center"}}>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Phone_no</th>
        <th>Attendance</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* displaying students data in a table */}
      {StudentData.map((student,index)=>{
        return (
          <tr key={student.id || index}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.email}</td>
            <td>{student.phone_no}</td>
            <td>{student.isPresent && "Present" }</td> 
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
            </tr>
        )
      })}

      {/* to know presented students data */}

      {/* {TodayClassAttendees.map((student,index)=>{
        return (
          <tr key={student.id || index}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.email}</td>
            <td>{student.phone_no}</td> */}
            {/* <td>{student.isPresent ? "Present" : "Absent"}</td>  */}
            {/* <td>{student.isPresent && "Present" }</td> 
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
            </tr>
        )
      })} */}
    </tbody>
  </table>
)
}
export default StudentTable;