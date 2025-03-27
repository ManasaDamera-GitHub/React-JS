import React from 'react'
import { Students } from './Student/Student';
import { Staff } from './Staff/staff';
import { Subject } from './Subject/Subject';


const App = () => {
  // const isLogin=true;
  return (
    <>
      
      {/* <Comp2/> */}

      {/* <h1>{isLogin ? <Comp1/> :" Please login"}</h1> */}
    <Students/>
    <Staff/>
    <Subject/>
    </>
  )
}

export default App;
