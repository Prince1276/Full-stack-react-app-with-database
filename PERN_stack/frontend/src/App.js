import React from "react";
import InputComponent from "./components/inputComponent";
import "./App.css";
import ListTodoComponent from "./components/listTodoComponent";

function App() {
  return (
    <div className="container">
      <InputComponent />
      <ListTodoComponent />
    </div>
  );
}

export default App;
