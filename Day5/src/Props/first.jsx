import Second from "./second";

const First=(props)=>{
return(
    <>
    <h1>{props.wish} {props.name}</h1> 
    <Second w={props.wish} n={props.name}/>
    </>
)
}
export default First;