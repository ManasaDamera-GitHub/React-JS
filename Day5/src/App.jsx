// function Forms(){
//   const inputData={
//     LoginForm:{
//       labels:["Email","Password"],
//       fields:[
//         { id: 1, type: "email", placeholder: "Enter your email", id: "email", name: "email" },
//         { id: 2, type: "password", placeholder: "Enter your password", id: "password", name: "password" }
//       ],
//     },
//     registerForm:{
//       labels:["Email","Password"],
//       fields:[
//         { id: 1, type: "email", placeholder: "Enter your email", id: "email", name: "email" },
//         { id: 2, type: "password", placeholder: "Enter your password", id: "password", name: "password" },
//         { id: 3, type : "text", placeholder : "Enter your name", id : "username", name : "username" }
//       ]
//     }
//   }
//   return(
//     <>

import First from "./Props/first";

    
//     </>
//   )
// }

// export default Forms;


function App(){
  const greet="hello";
  const name="Manasa";

  return(
    <>
    <First wish={greet} name={name}/>
    </>
  )
}
export default App;