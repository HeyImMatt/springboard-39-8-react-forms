import React from 'react';
import './TodoItem.css';

function TodoItem( { item, idx, completeTodo, deleteTodo } ) {
  return (
    <div className="todo-item" id={idx}>
      <button type="button" className="complete-btn" onClick={completeTodo}>{item.isComplete ? 'Mark Incomplete' : 'Mark Complete'}</button>
      <p className={item.isComplete ? 'complete' : 'incomplete'}>{item.todo}</p>
      <button type="button" className="delete-btn" onClick={deleteTodo}>X</button>
    </div>
  )
}

export default TodoItem;