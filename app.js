import React from "React";
import ReactDOM from "React-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ALIVE!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
