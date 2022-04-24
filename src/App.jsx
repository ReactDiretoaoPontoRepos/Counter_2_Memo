import { useState, useCallback } from "react";
import Child from "./components/Child";

import "./App.scss";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  const handleCounter = useCallback(() => setCounter(counter + 1), [counter]);

  return (
    <main>
      <h1>Componente pai: {counter}</h1>

      <input
        type="text"
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />

      <br />
      <br />

      <button onClick={handleCounter}>+1</button>

      <br />
      <br />

      <Child counter={counter} incrementCounter={handleCounter} />
    </main>
  );
};

export default App;
