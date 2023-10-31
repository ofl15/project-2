import React, { useEffect, useState } from "react";
import axios from 'axios'

export default function Form({ todos, setTodos, todo = null, onSubmit , onChange}) {
  const [value, setValue] = useState("");
  useEffect(() => todo && setValue(todo.title), [todo])

  const addTodo = async (event) => {
    event.preventDefault();

    if (value) {
      await axios.post('http://127.0.0.1:8000/todo', {title: value, completed: false})
           .then(() => onChange())
           .catch(err => console.log(err))
           onChange()
          setValue("")
      return;
    } else{
      window.alert("you didn't write anything");
    }
  };

  return (
    <form className='form' onSubmit={todos ? event => addTodo(event) : event => onSubmit(event, value)}>
   <input
       type="text"
       value={value}
       onInput={event => setValue(event.target.value)}
       placeholder="Hit Enter to add task..."
   />
</form>

  );
}
