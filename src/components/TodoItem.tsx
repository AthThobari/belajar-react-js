import type { Todo } from "../pages/TodoApp";

interface Props {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onToggle, onDelete}: Props) => {
    return (
        <li style={{listStyleType: "none", display: "flex", gap: "50px" }}>
            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
            <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>
                {todo.text}
            </span>
            <button onClick={() => onDelete(todo.id)}>Hapus</button>
        </li>
    )
}

export default TodoItem;