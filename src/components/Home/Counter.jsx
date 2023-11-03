import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GrPowerReset } from "react-icons/gr";
import { CiCircleRemove } from "react-icons/ci";
import {
  decrement,
  increment,
  reset,
  removeCounter,
  updateLabel,
} from "../actions";
import "./counter.css"; // Import your CSS file

const Counter = ({ index }) => {
  const counter = useSelector((state) => state.counters[index]);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [newLabel, setNewLabel] = useState(counter.label);

  // Add state for start value input
  const [isAddingStartValue, setIsAddingStartValue] = useState(false);
  const [startValue, setStartValue] = useState(0);

  const saveLabel = () => {
    dispatch(updateLabel(index, newLabel));
    setIsEditing(false);
  };

  const saveStartValue = () => {
    dispatch(reset(index, startValue));
    setIsAddingStartValue(false);
  };

  return (
    <div className="counter">
      <label className="counter-label">
        {isEditing ? (
          <input
            type="text"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
          />
        ) : (
          counter.label
        )}

        <span
          role="img"
          aria-label="remove-icon"
          onClick={() => {
            dispatch(removeCounter(index));
          }}
          className="remove-icon"
        >
          ❌
        </span>
      </label>
      <span>{counter.value}</span>
      <div className="counter-buttons">
        <button
          className="decrement"
          onClick={() => dispatch(decrement(index))}
        ></button>
        <button
          className="increment"
          onClick={() => dispatch(increment(index))}
        ></button>
      </div>
      {isEditing && (
        <div className="rename-button-container">
          <button className="save-button" onClick={saveLabel}></button>
        </div>
      )}
      {!isEditing && (
        <button
          className="rename-button"
          onClick={() => setIsEditing(!isEditing)}
        ></button>
      )}

      {/* Add input field for start value */}
      {isAddingStartValue ? (
        <div className="start-value-input">
          <input
            type="number"
            value={startValue}
            onChange={(e) => setStartValue(Number(e.target.value))}
          />
          <button className="save-button" onClick={saveStartValue}></button>
        </div>
      ) : (
        <button
          className="add-start-value-button"
          onClick={() => setIsAddingStartValue(true)}
        ></button>
      )}

      <button
        onClick={() => dispatch(reset(index, 0))}
        className="reset-button"
      ></button>
    </div>
  );
};

export default Counter;
