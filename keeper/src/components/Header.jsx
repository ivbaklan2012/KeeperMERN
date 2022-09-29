import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Header = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <header>
      <Link to="/">
        <h1>Keeper</h1>
      </Link>
      <nav>
        {/* {user && (
          <div>
            <span>{user.email}</span>
            <span onClick={handleLogout}>Log Out</span>
          </div>
        )}
        {!user && (
          <div>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        )} */}
        {user ? (
          <div>
            <span>{user.email}</span>
            <span onClick={handleLogout}>Log Out</span>
          </div>
        ) : (
          <div>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
