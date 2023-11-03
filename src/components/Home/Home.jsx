import React, { useState } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addCounter } from "../actions";
import Counter from "./Counter";
import "./home.css"; // Import your CSS file

const Home = ({ name, isLoggedIn }) => {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const handleAddCounterClick = () => {
    if (!isLoggedIn) {
      // User is not logged in, show the login prompt
      setShowLoginPrompt(true);
    } else {
      // User is logged in, add a counter
      dispatch(addCounter(0));
    }
  };

  return (
    <div>
      <Navbar name={name} isLoggedIn={isLoggedIn} />
      <div className="home-container">
        <button
          onClick={handleAddCounterClick}
          className="add-counter-button"
        ></button>
        <div className="counter-container">
          {counters.map((counter, index) => (
            <Counter key={index} index={index} />
          ))}
        </div>
      </div>
      {showLoginPrompt && (
        <div className="login-prompt">
          <p>Please log or signup in to add a counter.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
