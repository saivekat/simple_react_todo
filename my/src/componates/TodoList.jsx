// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoInput';

function TodoList({ todos, toggleComplete, deleteTodo }) {
    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
}

export default TodoList;
