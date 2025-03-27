import { Heading } from "./Heading";
import { Search } from "./search";
import { StaffData } from "../Data/StaffData"
import { StaffTable } from "./StaffTable";

export const Staff=()=>{
    const columns=Object.keys(StaffData[0]);
    // console.log(columns)
    return(
        <>
        <Heading/>
        <Search/>
        <StaffTable columns={columns} dataSource={StaffData}/>
        </>
    )
}