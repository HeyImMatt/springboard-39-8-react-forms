import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoItem from './TodoItem'

function TodoList() {
  const INITIAL_FORM_DATA = {
    todo: '',
    isComplete: false,
  }
  const [todoList, setTodoList] = useState([]);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData, 
      [name]: value,
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setTodoList((list) => [...list, formData])
    setFormData(INITIAL_FORM_DATA);
  }
  return(
    <>
      <NewTodoForm 
      formData={formData}
      changeHandler={changeHandler}
      submitHandler={submitHandler}
      />
      <h3>Todo List</h3>
      {todoList.map((item) => <TodoItem item={item} />)}
    </>
  )
}

export default TodoList;