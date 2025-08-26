import React, { Children } from "react";
import "./App.css";
import TodoApp from "./pages/TodoApp";

class ButtonBlack extends React.Component {
  render() {
    return (
        <button
          style={{
            background: "blue",
            border: "none",
            color: "white",
            padding: "5px 10px",
            borderRadius: "3px",
          }}
          type="submit"
        >
          Buy now
        </button>
    );
  }
}

interface ButtonVariant {
  variant: string,
  text: string,
  children: React.ReactNode;
}

const Button = ({variant, text, children}: ButtonVariant) => {
  return (
    <button
          style={{
            background: "black",
            border: "none",
            color: variant,
            padding: "5px 10px",
            borderRadius: "3px",
          }}
          type="submit"
        >
          {text}
        </button>
  )

}
function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          style={{
            background: "blue",
            border: "none",
            color: "white",
            padding: "5px 10px",
            borderRadius: "3px",
          }}
          type="submit"
        >
          Buy now
        </button>
        <Button variant="yellow" text="Buy now">lah</Button>
        <Button variant="blue" text="Buy Latter">lah</Button>
        <Button variant="red" text="Never Buy">lah</Button>
        <ButtonBlack></ButtonBlack>
      </div>
      <TodoApp />
    </>
  );
}

export default App;
