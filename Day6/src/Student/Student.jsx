import { StudentData } from "../Data/Student"
import { Heading } from "./Heading"
import Search from "./Search"
import { StudentTable } from "./Table"

export const Students =()=>{
const columns=Object.keys(StudentData[0])
    return(
        <>
        <Heading/>
        <Search/>
        <StudentTable columns={columns} dataSource={StudentData}/>
        </>
    )
}