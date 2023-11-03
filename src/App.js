import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import { auth } from "./firebase";
import { useState, useEffect } from "react";
function App() {
  const [userName, setUserName] = useState("");
  const [islogged, setIslogged] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setIslogged(true);
      } else {
        setUserName("");
        setIslogged(false);
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home name={userName} isLoggedIn={islogged} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
