import { useEffect, useRef, useState } from 'react'
import './App.css'
import OutlinedCard from './ToDoCard'
import axios from 'axios';


function App() {

  const [todoText, setTodoText] = useState(null);
  const [todoList, setTodoList] = useState([]);
  

  useEffect(() => {
    const postToDo = async () => {
      if(todoText !== null)
      {
        try {
          const reponse = await axios({
            method: 'post',
            url: 'http://localhost:5039/api/ToDoItems',
            headers: {},
            data: {
              "id": 0,
              "content": todoText,
              "isComplete": false
            }
          })
          console.log(reponse.data);
          setTodoList([...todoList, reponse.data]);
        } catch (error) {
          console.log('Error: ', error);
        }
      } else {}
    };
    postToDo();
  }, [todoText])

  return (
    <>
      <div className="input-form">
           <input id="todoInput" type="text" placeholder="Enter todo"/>
           <button onClick={() => setTodoText(document.getElementById('todoInput').value)}>Add Todo</button>
      </div>
      <div className='cards'>
        {todoList.map((todo, index) =>( 
          <OutlinedCard 
          key={index} 
          content={todo.content} 
          isComplete={todo.IsComplete}
          id={todo.id}
          />
        ))}
      </div>

    </>
)
}

export default App
