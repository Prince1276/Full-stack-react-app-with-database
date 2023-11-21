import React, { useState, useEffect } from "react";
import axios from "axios";
import EditTodoComponent from "./editTodoComponent";

function ListTodoComponent() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    async function fetchTodoList() {
      const response = await axios
        .get(`http://localhost:4000/todo/v1/api/getall`)
        .then((res) => setTodoList(res.data));
    }
    fetchTodoList();
  }, []);

  // Delete a todo from list.
  const deleteHandler = async (todo_id) => {
    console.log(todo_id);
    try {
      const response = await axios.delete(
        `http://localhost:4000/todo/v1/api/deleteatodo/${todo_id}`
      );
      setTodoList(todoList.filter((todo) => todo.todo_id !== todo_id));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h3 className="mt-2">Todo list</h3>
      <table className="table mt-3 text-center">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo) => {
            return (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                  <EditTodoComponent todo={todo} />
                </td>
                <td>
                  <button
                    onClick={() => deleteHandler(todo.todo_id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListTodoComponent;
