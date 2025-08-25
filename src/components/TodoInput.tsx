import { useState } from 'react'

interface Props {
onAdd: (text: string) => void;
}

const TodoInput = ({ onAdd }: Props) => {
const [input, setInput] = useState("");

const handleAdd = () => {
onAdd(input);
setInput("");
};

return(
<div>
<input type="text" 
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="Masukkan Todo..."
/>
<button onClick={handleAdd}>Tambah</button>
</div>
)
}

export default TodoInput;
