import React, { useState } from 'react';

const TodoForm = (props) => {
  const [newTodo, setNewTodo] = useState('');
  const addTodo = props.addTodo

  return <form className="todo-form" onSubmit = {event => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
    
  }}/>

  
}

const TodoList = (props) => {
  let todoList = props.TodoList

  return <div className="todo-list" >{
    todoList.map(
      (todo, idx) => <h3 key = {idx} > {todo} </h3>
      )

}</div>
}

const Todo = (props) => {
  const [todoList, setTodoList] = useState([]);

  function addTodo(todo) {
    let newTodoList = [...todoList, todo]
    setTodoList(newTodoList);
  }


  return <div className="todo">
    <TodoForm addTodo = {addTodo}/>
    <TodoList todoList = {todoList}/>
  </div>

}

export default Todo;