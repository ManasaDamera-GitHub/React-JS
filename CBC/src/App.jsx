import { Component } from "react";

class App extends Component {
  // constructor

  greet(){
  return `Hello`
  }
  render() {
    name = "manasa";
    const age = 15;
    return (
      <>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h5>{this.greet()}</h5>
      </>
    );
  }
}

export default App;
