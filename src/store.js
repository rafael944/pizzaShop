import { createStore } from "redux";

const initialState = {
  name: "",
  list: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.payload };
    case "addName":
      return { ...state, last: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
