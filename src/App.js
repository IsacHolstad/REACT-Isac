import './App.css';
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

function App() {
  return  (
      <>
        <Counter initialCount={0}></Counter>
        Counter Hooks
        <CounterHooks initialCount={0}></CounterHooks>
      </>
  )
}

export default App;
