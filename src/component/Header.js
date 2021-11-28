import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { logout, user } = useAuth();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Rosita
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link "
                  activeClassName="active"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              {!user ? (
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    login
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="/add-resort" className="nav-link">
                      Add Resort
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/bookings" className="nav-link">
                      My Bookings
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/manage" className="nav-link">
                      Manage Bookings
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <span onClick={logout} className="nav-link cursor">
                      Logout
                    </span>
                  </li>
                  <li className="nav-item">
                    <strong className="nav-link">{user.displayName}</strong>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
