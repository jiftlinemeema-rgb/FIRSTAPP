import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <div className="counter-container">
        <h1>Counter App</h1>
        <div className="count-display">
          <h2>{count}</h2>
        </div>
        <div className="button-group">
          <button className="btn btn-decrement" onClick={decrement}>
            Decrement
          </button>
          <button className="btn btn-reset" onClick={reset}>
            Reset
          </button>
          <button className="btn btn-increment" onClick={increment}>
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;