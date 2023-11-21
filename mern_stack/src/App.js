import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ExerciseListComponent from "./components/ExerciseListComponent";
import EditExerciseComponent from "./components/EditExerciseComponent";
import createExerciseComponent from "./components/createExerciseComponent";
import createUserComponent from "./components/createUserComponent";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <div className="container">
        <Route path="/" exact component={ExerciseListComponent} />
        <Route path="/edit/:id" component={EditExerciseComponent} />
        <Route path="/create" component={createExerciseComponent} />
        <Route path="/user" component={createUserComponent} />
      </div>
    </Router>
  );
}

export default App;
