import React from "react";
import Form from "./Form";
import axios from "axios";

export default function TodoUpdate({
  todo,
  todos,
  setTodos,
  showUpdate,
  setShowUpdate,
  onChange
}) {
  const handlerUpdate = async (event, value) => {
    event.preventDefault();

    await axios.put('http://127.0.0.1:8000/todo/' + todo.id, {title: value , completed: todo.completed})
      .then(() => onChange())
      .catch(err => console.log(err))


    setShowUpdate(!showUpdate)

  };

  return <Form todo={todo} onSubmit={handlerUpdate} />;
}
