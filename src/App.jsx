import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./store/counterSlice"; // Import actions

function App() {
  const count = useSelector((state) => state.counter.value); // Access the Redux state
  const dispatch = useDispatch(); // Access dispatch to dispatch actions

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
}

export default App;
