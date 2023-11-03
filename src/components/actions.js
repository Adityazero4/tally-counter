// actions.js
export const addCounter = (startValue) => ({
  type: "ADD_COUNTER",
  startValue,
});

export const removeCounter = (index) => ({
  type: "REMOVE_COUNTER",
  index,
});

export const updateLabel = (index, label) => ({
  type: "UPDATE_LABEL",
  index,
  label,
});

export const increment = (index) => ({
  type: "INCREMENT",
  index,
});

export const decrement = (index) => ({
  type: "DECREMENT",
  index,
});

export const reset = (index, startValue) => ({
  type: "RESET",
  index,
  startValue,
});
