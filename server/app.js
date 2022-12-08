const express = require('express');
const app = express();
const PORT = 8080;
const todoRouter = require('./routes/todo')


app.use(express.urlencoded({extended: true}));
app.use(express.json());
//기본주소: localhost:PORT/
app.use('/', todoRouter);


app.listen(PORT, ()=>{
  console.log(`http://localhost:${PORT}`);
})