const express = require('express');
const app = express();
const PORT = 8080;
const todoRouter = require('./routes/todo');
const cors = require('cors') 


app.use(express.urlencoded({extended: true}));
app.use(express.json());
//기본주소: localhost:PORT/
app.use(cors()); // 모든 서버에서 보내는 요청 수락
app.use('/', todoRouter);

app.listen(PORT, ()=>{
  console.log(`http://localhost:${PORT}`);
})