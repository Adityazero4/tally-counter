import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Import your CSS file
import { FaUser } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
const Navbar = ({ name, isLoggedIn }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">Tally Counter</div>
      <ul className="nav-links">
        {isLoggedIn ? (
          <>
            <li>
              <button onClick={toggleUserMenu} className="user-icon">
                <FaUser />
              </button>
              {showUserMenu && (
                <ul className="user-menu">
                  <li>{`Welcome, ${name}`}</li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              )}
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
