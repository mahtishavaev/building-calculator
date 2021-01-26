import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { nextStep } from "./redux/reducer";

function App() {
  const dispatch = useDispatch();
  dispatch(nextStep());
  return (
    <div className="App">
      <button onClick={() => dispatch(nextStep())}>sdfsdf</button>
    </div>
  );
}

export default App;
