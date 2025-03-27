
// const Products=[
  //   {title:'apple',isFruit:true,id:1},
  //   {title:'BANANA',isFruit:true,id:2},
//   {title:'Potato',isFruit:false,id:3},
//   {title:'Tomato',isFruit:false,id:4},
//   {title:'kivi',isFruit:true,id:5}
// ];


// function FruitList(){
  //   const ItemsList=Products.map(prod=>{
//     // console.log(prod.title)
//    return (
//     <>
//    <li 
//    key={prod.id}
//     style={{color:prod.isFruit ? "white" : "red"}}>
//       {prod.title}
//     </li>
//   </>
//    )
//   })
  
//   return(
  //     <ul>{ItemsList}</ul>
  //   );
  // }
  
// export default FruitList;




// Responding to events

// function MyButton(){
  //   function handle(){
//     alert('You clicked me! ');
//   }

//   return (
  //     <button onClick={handle}>
  //       Click me
  //     </button>
  //   );
  // }
  
// export default MyButton;

import { useState } from "react";

export default function MyButton(){
  const[count,setCount]=useState(0);


  function handleClick(){
    setCount(count+1);
  }
  
  return(
    <button onClick={handleClick} style={{backgroundColor:"white", color:"black"}} >
      {count} liked
    </button>
  );
}
