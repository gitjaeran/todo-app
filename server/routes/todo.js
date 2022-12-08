const express = require('express');
const { Todo } = require('../models');
const router = express.Router();
//기본주소: localhost:PORT/

//GET localhost:PORT/todos - show all todos (READ)
router.get('/todos', async (req, res)=>{
  try {
    let data = await Todo.findAll();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
  //findAll() 시퀄라이즈 쿼리문
  // Todo.findAll().then((data) => {
  //   console.log(data);
  //   res.send(data);
  // });
});

//POST localhost:PORT/todo - create a new todo (CREATE)
router.post('/todo', async (req, res) => {
  try{
    let newTodo = await Todo.create({
      title: req.body.title,
      // done: req.body.title
  });
    res.send(newTodo);
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;