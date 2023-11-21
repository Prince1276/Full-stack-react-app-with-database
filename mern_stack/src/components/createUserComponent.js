import React, { Component } from "react";
import axios from "axios";

class CreateUserExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
    };
  }
  onChangeUserName = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
    };
    console.log(user);
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log("Response", res.data))
      .catch((err) => console.log(`Error : ${err}`));
    this.setState({ username: "" });
    window.location = "/";
  }
  render() {
    return (
      <div>
        <h3>Create a new Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username : </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUserName}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create user"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateUserExercise;
