import React, { useState } from "react";
import TodoUpdate from "./TodoUpdate";
import axios from "axios"

export default function Todo({ todos, todo, setTodos, onChange }) {
  const [showUpdate, setShowUpdate] = useState(false);

  const completedTodo = async () => {
    await axios 
    .put('http://127.0.0.1:8000/todo/' + todo.id,
           {completed: !todo.completed, title: todo.title})
       .then(() => onChange())
       .catch(error => console.log(error))    
  };

  const deleteTodo = async (id) => {
    let confirmation = window.confirm("siz rozimisiz shuni delete qilishga");
    if (confirmation) {
       await axios.delete('http://127.0.0.1:8000/todo/' + todo.id)
          .then(() => onChange())
          .catch(error => console.log(error))
    }
  };

  return (
    <div className="todo">
      {showUpdate ? (
        <TodoUpdate
        onChange={onChange}
        todo ={todo}
        todos={todos}
        setTodos={setTodos}
        showUpdate={showUpdate}
        setShowUpdate={setShowUpdate}
         />
      ) : (
        <div className={todo.completed ? "completed" : ""}>
          <input
            type="checkbox"
            checked={todo.completed}
            className="checkbox"
            onChange={() => completedTodo(todo)}
          />
          <label htmlFor={`check-${todo.id}`}>{todo && todo.title.length > 30 ? `${todo.title.slice(1, 45) }...`: todo.title}</label>
          <i className="icon" onClick={() => deleteTodo(todo.id)}>
            <img
              src="https://www.svgrepo.com/show/21045/delete-button.svg"
              alt=""
              width="20"
              height="20"
            />
          </i>
          <i className="icon" onClick={() => setShowUpdate(!showUpdate)}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OOjs_UI_icon_edit-ltr.svg/1024px-OOjs_UI_icon_edit-ltr.svg.png"
              alt=""
              width="20"
              height="20"
            />
          </i>
        </div>  
      )}
    </div>
  );
}
