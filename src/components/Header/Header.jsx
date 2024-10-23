import React from "react";
import { Link } from "react-router-dom";
function Header() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar bg-primary " data-bs-theme="dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/login">Login</Link>
              <Link className="nav-link active" to="/register">Register</Link>
              <Link className="nav-link active" to="/account">Account</Link>
           
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
