import { React, Component } from "react";
import "./styles/App.css";
import "./styles/buttons.css";
import InputScreen from "./components/InputScreen";

class App extends Component {
  render() {
    return (
      <div className="container">
        <InputScreen name="password" className="inputScreen"></InputScreen>
      </div>
    );
  }
}
export default App;
