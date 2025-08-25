import type { Todo } from '../pages/TodoApp'
import TodoItem from './TodoItem';

interface Props {
    todos: Todo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoList = ({ todos, onToggle, onDelete}: Props) => {
    return (
        <ul style={{display: "flex", justifyContent: "center", flexDirection: "column", gap: "10px", alignItems: "center"}}>
            {todos.map((todo) => (
                <TodoItem 
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
                />
            ))}
        </ul>
    )
}

export default TodoList;