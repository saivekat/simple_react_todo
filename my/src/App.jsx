// src/App.js
import React, { useState } from 'react';
//import TodoList from './components/TodoList';

//import TodoInput from './components/Todonput';
import './App.css';
import TodoInput from './componates/Todonput';
import TodoList from './componates/TodoList';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        setTodos([
            ...todos,
            { id: Date.now(), task: task, completed: false }
        ]);
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="app">
            <h1>To-Do App</h1>
            <TodoInput addTodo={addTodo} />
            <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        </div>
    );
}

export default App;
