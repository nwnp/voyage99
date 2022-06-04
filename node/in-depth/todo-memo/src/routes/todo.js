const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

router.get("/todos", async (req, res, next) => {
  const todos = await Todo.find().sort("-order").exec();
  res.send({ todos });
});

router.post("/todos", async (req, res, next) => {
  try {
    const { value } = req.body;
    const maxOrderByUserId = await Todo.findOne().sort("-order").exec();
    const order = maxOrderByUserId ? maxOrderByUserId.order + 1 : 1;
    const todo = new Todo({ value, order });
    await todo.save();
    res.send({ todo });
  } catch (error) {
    console.error(error);
  }
});

router.patch("/todos/:todoId", async (req, res, next) => {
  const { todoId } = req.params;
  const { order } = req.body;

  const currentTodo = await Todo.findById(todoId);
  if (!currentTodo) {
    throw new Error("존재하지 않는 todo 데이터");
  }

  if (order) {
    const targetTodo = await Todo.findOne({ order }).exec();
    if (targetTodo) {
      targetTodo.order = currentTodo.order;
      await targetTodo.save();
    }
    currentTodo.order = order;
  }
});

module.exports = router;
