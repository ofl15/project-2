import React, { useEffect } from 'react'
import Form from "../components/Form";
import Todos from "../components/Todos";
import { useState } from 'react';
import Header from '../components/Header';
import '../static/style.css'
import Footer from '../components/Footer';
import axios from 'axios'


export default function Main (){
    const [todos, setTodos] = useState([""])

    useEffect(() => load(), [])

    function load() {
        axios.get('http://127.0.0.1:8000/todo')
            .then(res => setTodos(res.data))
            .catch(err => console.log(err))
    }
 
     
     
     return (
        <div className='container'>
            <div className='box'>
                <Header />
                <Form todos={todos} setTodos={setTodos} onChange={load} />
               <Todos todos={todos} setTodos={setTodos} onChange={load}/>
                <Footer todos={todos} setTodos={setTodos}/>
            </div>
        </div>
     )
     
}

