// only 1 default export should present in a file

import Greet from "./Greet";
export const Component1 = () => <h1>Hello</h1>; //Arrow functions

export const Component2 = () => <h2>World</h2>;

const Component3 = () => <p>How are you?</p>;
export default Component3;

export function Cmp() {
  //regular function
  return (
    <>
      {/* Nested Component */}
      <Greet />
      <h1>Welcome</h1>
      <p>To react js</p>
    </>
  );
}

// Creating Table

function Table1() {
  return (
    <>
      <table border={1} cellSpacing={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Batch</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
      <Greet/>
      </table>
      <Component1/>
    </>
  );
}

export {Table1}