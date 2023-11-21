import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = (props) => (
  <tr>
    <td>{props.exercises.username}</td>
    <td>{props.exercises.description}</td>
    <td>{props.exercises.duration}</td>
    <td>{props.exercises.date.substring(1, 10)}</td>
    <tr>
      <Link to={`/edit/${props.exercises._id}`}>Edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteExercise(props.exercises._id);
        }}
      >
        Delete
      </a>
    </tr>
  </tr>
);

class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {
      exercises: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercise")
      .then((res) => {
        this.setState({ exercises: res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(`Error : ${err}`));
  }

  deleteExercise(id) {
    axios
      .delete(`http://localhost:5000/exercise/${id}`)
      .then((res) => console.log(res.data));
    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  exerciseList() {
    return this.state.exercises.map((ce) => {
      return (
        <Exercise
          exercises={ce}
          deleteExercise={this.deleteExercise}
          key={ce._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Exercise</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>UserName</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th />
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ExercisesList;
