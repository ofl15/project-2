import React from "react";
import axios from "axios";

export default function Footer({todos ,  setTodos}) {

    function filterTodos(type) {
        axios.get('http://127.0.0.1:8000/todo' , {params: {type: type}})
            .then(response => setTodos(response.data))
    }


    return(
        <div className="footer">
            <b onClick={() => filterTodos('all')} className="tag">
                {(todos) ? todos.length : '0'}
            </b>

            <b onClick={() => filterTodos('completed')} className="tag">
                { (todos) ? todos.filter(todo => todo.completed).length : '0' } completed
            </b>

            <b onClick={() => filterTodos('open')} className='tag'>
                {(todos) ? todos.filter(todo => !todo.completed).length : '0'} open
            </b>

        </div>
    )
}