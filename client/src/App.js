import {useState} from 'react'
import Todo from './components/Todo'

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
    }
  ])

  return (
    <div className="App">
      {todoItems.map((item)=> {
          console.log(item)
          return <Todo key={item.id} item={item}/>
        })
      }
    </div>
  );
}

export default App;
