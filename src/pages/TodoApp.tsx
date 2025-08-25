import { useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

export interface Todo {
id: number;
text: string;
completed: boolean;
}

const TodoApp = () => {
const [todos, setTodos] = useState<Todo[]>([])

const addTodo = (text: string) => {
if (text.trim() === "") return;
const newTodo: Todo = { 
id: Date.now(), 
text, 
completed: false
};

setTodos([...todos, newTodo])
}

const toggleTodo = (id: number) => {
setTodos(
todos.map((todo) => 
todo.id === id ? {...todo, completed: !todo.completed} : todo
)
)
}

const deleteTodo = (id: number) => {
setTodos(todos.filter((todo) => todo.id !== id))
}

return(
<div style={{padding: "20px"}}>
<h2>Todo List (Component)</h2>
<TodoInput onAdd={addTodo} />
<TodoList todos={todos} onToggle={toggleTodo} 
onDelete={deleteTodo} />
</div>
)
}

export default TodoApp;
