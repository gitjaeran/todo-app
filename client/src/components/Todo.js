import {useState} from 'react';

const Todo = ({item, deleteItem}) => {
const {id, title, done} = item;

const [todoItem, setTodoItem] = useState(item)

const [readOnly, setReadOnly] = useState(true)

const onDeleteBtnClick = () => {
  deleteItem(todoItem);
}

//title input 커서가 깜빡인다고 수정 가능한것은 아님
//사용자가 키 입력할 때마다 todoItem의 title을 새 값으로 변경
const editEventHandler = (e) => {
  //rest: id, done 정보
  const { title, ...rest } = todoItem;

  setTodoItem({
    title: e.target.value,
    ...rest
  })
}

//title input 클릭시 readOnly state를 false로 변경
const offReadOnlyMode = () => {
  setReadOnly(false);
}

//title input에서 enter key 입력시 title 수정 완료 = readOnly state를 true로 변경
const enterKeyEventHandler = (e) => {
  if (e.key === 'Enter') {
    setReadOnly(true)
  }
}

// const checkBoxEventHandler = () => {
//   todoItem.done = !todoItem.done //true <-> false
//   setTodoItem(todoItem)
// }

  return (
    <div className="Todo">
      <input 
        type="checkbox" 
        id={`todo${id}`} 
        name={`todo${id}`}  
        value={`todo${id}`} 
        defaultChecked={done}
        // onChange={checkBoxEventHandler}
      />
        
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input 
      type="text"
      id={`todo${id}`}
      value={todoItem.title}
      onChange={editEventHandler}
      onKeyPress={enterKeyEventHandler}
      onClick={offReadOnlyMode}
      readOnly={readOnly}/>

      <button onClick={onDeleteBtnClick}>DELETE</button>
    </div>
  )
}

export default Todo;