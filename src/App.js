import { useState } from 'react';
import DisplayHighlight from './DisplayHighlight';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((cur) => cur + 1);
  };
  const decrement = () => {
    setCount((cur) => cur - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <header className='App-header'>Header</header>
      <section>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
      <DisplayHighlight count={count}></DisplayHighlight>
    </>
  );
}

export default App;
