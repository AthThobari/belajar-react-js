import { useState } from "react";

// Definisi tipe Todo
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp = () => {
  // state daftar todo
  const [todos, setTodos] = useState<Todo[]>([]);
  // state input teks
  const [input, setInput] = useState<string>("");

  // fungsi tambah todo
  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    console.log(newTodo)
    console.log(todos)
    console.log(typeof todos)
    setInput("");
  };

  // fungsi toggle selesai / belum
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

//   const toggleTodo2 = (id: number) => {
//     const updatedTodos = [];

//     for (let i = 0; i < todos.length; i++) {
//         const todo = todos[i]

//         if(todo.id == id) {
//             updatedTodos.push({...todo, completed: !todo.completed})
//         } else {
//             updatedTodos.push(todo)
//         }
//     }

//     setTodos(updatedTodos)
//   }

  // fungsi hapus todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List (TypeScript)</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Masukkan todo..."
      />
      <button onClick={addTodo}>Tambah</button>

      <ul >
        {todos.map((todo) => (
          <li key={todo.id} style={{listStyleType: "none"}}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none", }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
