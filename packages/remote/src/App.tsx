//@ts-ignore
import React from "react";
//@ts-ignore
import ReactDOM from "react-dom";

import "./index.css";

export default function App () {

  return (
    <>
    <div className="container">
    <div>Name: remote</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    </div>
    </>
    );
}
ReactDOM.render(<App />, document.getElementById("app"));
