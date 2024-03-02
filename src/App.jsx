import { useDispatch, useSelector } from "react-redux";
import Listis from "./Listis";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="main">
      <header className="header">
        <input
          onChange={(e) =>
            dispatch({
              type: "changeName",
              payload: e.target.value,
            })
          }
          type="text"
          placeholder="Write somthing..."
        ></input>
        <button
          onClick={() =>
            dispatch({
              type: "addName",
              payload: {
                name: name,
                isDisabled: false,
                id: Math.random(),
              },
            })
          }
        >
          Click Here
        </button>
      </header>
      <Listis />
    </div>
  );
}

export default App;
