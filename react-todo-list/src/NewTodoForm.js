import React from 'react';

function NewTodoForm({ formData, changeHandler, submitHandler }) {
  return (
  <form onSubmit={submitHandler}>
    <label htmlFor="todo">What needs doin'?</label>
    <input 
    type="text"
    id="todo"
    name="todo"
    value={formData.todo}
    onChange={changeHandler}
    />
    <button type="submit">Add Todo</button>
  </form>
  );
}

export default NewTodoForm;
