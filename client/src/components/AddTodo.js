import {useState} from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/AddTodo.scss';

const AddTodo = ({addItem}) => {

  // 사용자 입력을 저장할 객체
  // (id, title, done에 대한 정보를 저장해야해서 객체 형태로!!)
  const [todoItem, setTodoItem] = useState({
    title: '',
});

  const onButtonClick =  () => {
  //input값이 양끝 공백 제외해서도 0일경우 add함수 미리 종료
  if (todoItem.title.trim().length === 0) {
    return;
  }

    //props로 받아온 addItem 함수 실행
    addItem(todoItem) //title: input입력값
    setTodoItem({title: ''}) //input 초기화
  }

  //엔터키 입력시 todo 추가
  const onEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      onButtonClick();
    }
  }

  return (
  <div className="AddTodo">
  <input 
  type="text" 
  placeholder="Add your new Todo" 
  value={todoItem.title} 
  onChange={(e) => setTodoItem({title: e.target.value})}
  onKeyPress={onEnterKeyPress}
  autoFocus/>

  <button onClick={onButtonClick}><FontAwesomeIcon icon={faPlus} /></button>
  </div>
  )
}

export default AddTodo;