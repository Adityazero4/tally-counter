// reducers.js
import { combineReducers } from "redux";

const countersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      return [
        ...state,
        { label: "New Counter", value: action.startValue || 0 },
      ];
    case "REMOVE_COUNTER":
      return state.filter((counter, index) => index !== action.index);
    case "UPDATE_LABEL":
      return state.map((counter, index) =>
        index === action.index ? { ...counter, label: action.label } : counter
      );
    case "INCREMENT":
      return state.map((counter, index) =>
        index === action.index
          ? { ...counter, value: counter.value + 1 }
          : counter
      );
    case "DECREMENT":
      return state.map((counter, index) =>
        index === action.index
          ? { ...counter, value: counter.value - 1 }
          : counter
      );
    case "RESET":
      return state.map((counter, index) =>
        index === action.index
          ? { ...counter, value: action.startValue || 0 }
          : counter
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counters: countersReducer,
});

export default rootReducer;
