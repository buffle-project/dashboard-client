//@ts-ignore
import React from "react";
//@ts-ignore
import ReactDOM from "react-dom";
import "./index.css";

//@ts-ignore
import Remote from 'remote/Remote'

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <br />
    <Remote />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
