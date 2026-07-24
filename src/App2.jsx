import { useState } from 'react';
import SignupForm from './SignupForm';

function App() {
  const [count, setCount] = useState(0);
  const [byTen, setByTen] = useState(10);

  const increment = () => setCount((current) => current + 1);
  const decrement = () => setCount((current) => current - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>

      <p>Count: {byTen}</p>
      <button onClick={() => setByTen((current) => current + 10)}>+10</button>
      <button onClick={() => setByTen((current) => current - 10)}>-10</button>
      <button onClick={() => setByTen(10)}>Reset</button>

      <SignupForm />
    </div>
  );
}

export default App;