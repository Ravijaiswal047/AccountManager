import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Account from "./components/Account/Account.jsx";
import Header from "./components/Header/Header.jsx";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/account"
          element={
            user ? (
              <Account user={user} setUser={setUser} />
            ) : (
              <Login setUser={setUser} />
            )
          }
        />
        <Route path="/" element={<h1>Welcome to Account Manager</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
