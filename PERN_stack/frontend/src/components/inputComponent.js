import React, { useState } from "react";
import axios from "axios";

function InputComponent(props) {
  const [description, setDescription] = useState("");
  const onChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const headers = { "Content-Type": "application/json" };
      const response = await axios
        .post("http://localhost:4000/todo/v1/api/create", body, headers)
        .then((res) => {
          console.log(`Respionse from the post API is ${res}`);
        })
        .catch(console.log(`Error from API.`));
      window.location = "/";
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1 className="text-center mt-5">PERN todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitHandler}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={onChangeHandler}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  );
}

export default InputComponent;
