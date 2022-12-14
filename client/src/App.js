import {useState, useRef, useEffect } from 'react'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'
import './styles/App.scss';


const App = () => {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: 'My Todo1',
      done: false,
    },
    {
      id: 2,
      title: 'My Todo2',
      done: false,
    },
    {
      id: 3,
      title: 'My Todo3',
      done: true, //checkbox 체크 유무
    },
])

  //ADD
const todoId = useRef(4)

// useEffect(()=>{
//   const getTodos = async () => {
//     let result = await axios.get('http://localhost:8080/todos')
//   }
// })

  // AddTodo 컴포넌트는 상위 컴포넌트(App)의 todoItems(state)에 접근 불가능
  // 상위 컴포넌트(App)은 AddTodo 컴포넌트 접근 가능
  // => App 컴포넌트에 addItem() 함수를 정의하고, 해당 함수를 AddTodo props로 넘겨야 함
  const addItem = (newItem) => {
// let newItem = {id: , title: , done:false}
  newItem.id = todoId.current++ //key를 위한 id 설정
  newItem.done = false //done 초기화
  // 기존 todoItems를 유지하고, 새로운 newItem을 추가
setTodoItems([...todoItems, newItem]) //또는 todoItems. concat(newItem) 사용
  }

  //delete
  const deleteItem = (targetItem) => {
    let newTodoItems = todoItems.filter((item) => item.id !== targetItem.id)
    //뷰에도 반영되는 코드
    setTodoItems(newTodoItems)
  }

  return (
    <div className="App">
      <header>🎁Todo App🎁</header>
      <AddTodo addItem={addItem} />
      <div className='left-todos'>✍️ {todoItems.length} Todos</div>
      {
        todoItems.length > 0 ?
      todoItems.map((item)=> {
          // console.log(item)
          return <Todo key={item.id} item={item} deleteItem={deleteItem} /> ;
        })
      :
        <p className='empty-todos'>Todo를 추가해주세요!</p>
      }
    </div>
  );
}

export default App;
