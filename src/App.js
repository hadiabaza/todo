import { useState } from "react";
import "./App.css";
import "./components/Todos";
import Todos from "./components/Todos";

let nextId = 0;

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleCheckboxClick = (clickedTodo) => {
    const newTodos = JSON.parse(JSON.stringify(todos));
    newTodos.forEach((todo) => {
      if (todo.id === clickedTodo.id) {
        todo.isDone = !todo.isDone;
      }
    });
    setTodos(newTodos);
  };
  console.log({ inputValue, todos });

  return (
    <div className="App">
      <h1>To do list</h1>
      <input
        placeholder="Add a new to do"
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button
        onClick={() => {
          setTodos((todos) => {
            return [
              ...todos,
              { value: inputValue, isDone: false, id: nextId++ },
            ];
          });

          setInputValue("");
        }}
      >
        Add
      </button>

      <Todos todos={todos} handleCheckboxClick={handleCheckboxClick} />
    </div>
  );
}

export default App;

// {value: 'brush teeth', isDone: false, id: 0}
// [ {}{}{} ]
