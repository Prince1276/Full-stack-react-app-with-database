const express = require("express");
const routers = express.Router();
const pool = require("../db");

// CREATE todo.
routers.post("/create", async (req, res) => {
  try {
    const { description } = req.body;
    // res.send("Before");
    const newTodo = await pool.query(
      `INSERT INTO todo (description) VALUES($1) RETURNING *`,
      [description]
    );
    res.status(200).json({ message: newTodo.rows[0] });
  } catch (error) {
    res.status(500).json({ Error: `General failure` });
  }
});

// GET all todo.
routers.get("/getall", async (req, res) => {
  try {
    const allTodos = await pool.query(`SELECT * from todo`);
    res.status(200).json(allTodos.rows);
  } catch (error) {
    res.status(500).json({ Error: `General failure` });
  }
});

// GET a single todo.
routers.get("/getatodo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getAtodo = await pool.query(`SELECT * FROM todo where todo_id=$1`, [
      id,
    ]);
    res.status(200).json({ message: getAtodo.rows[0] });
  } catch (error) {
    res.status(500).json({ Error: `General failure` });
  }
});

//UPDATE a single todo.
routers.put("/updateatodo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateAtodo = await pool.query(
      `UPDATE todo SET description=$1 WHERE todo_id=$2`,
      [description, id]
    );
    res.status(200).json({ message: `Table updated...` });
  } catch (error) {
    res.status(500).json({ Error: `General failure` });
  }
});

//Delete a todo
routers.delete("/deleteatodo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteatodo = await pool.query(`DELETE FROM todo WHERE todo_id=$1`, [
      id,
    ]);
    res.status(200).json({ message: `Todo deleted successfully.` });
  } catch (error) {
    res.status(500).json({ Error: `General failure` });
  }
});
module.exports = routers;
