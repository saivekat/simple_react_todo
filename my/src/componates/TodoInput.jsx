// src/components/TodoItem.js
import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return (
        <div className="todo-item">
            <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                }}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.task}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    );
}

export default TodoItem;
