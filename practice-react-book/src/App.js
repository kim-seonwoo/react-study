import { Component } from "react";
import LifeCylcleSample from "./LifeCycleSample";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };
  handleClick = () => {
    this.state({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>random Color</button>
        <LifeCylcleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
