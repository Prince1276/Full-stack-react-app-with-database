import React, { useState } from "react";
import axios from "axios";

function EditTodoComponent(props) {
  const [description, setDescription] = useState(props.todo.description);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const headers = { "Content-Type": "application/json" };
      const response = await axios.put(
        `http://localhost:4000/todo/v1/api/updateatodo/${props.todo.todo_id}`,
        body,
        headers
      );
      window.location = "/";
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${props.todo.todo_id}`}
      >
        Edit
      </button>

      <div
        className="modal fade"
        id={`id${props.todo.todo_id}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        onClick={() => setDescription(props.todo.description)}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Todo
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setDescription(props.todo.description)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => setDescription(props.todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTodoComponent;
