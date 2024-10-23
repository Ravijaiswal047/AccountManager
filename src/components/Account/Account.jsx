import React, { useState } from "react";

const Account = ({ user, setUser }) => {
  const [fullname, setFullName] = useState(user.fullname);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUser = { fullname, username, email, password };
    localStorage.setItem(email, JSON.stringify(updatedUser));
    setUser(updatedUser);
    alert("Account updated successfully");
  };

  return (
    <div className="row mt-3">
      <div className="col-4"></div>
      <div className="col-4 mt-2">
        <form className="needs-validation" onSubmit={handleUpdate} novalidate>
          <h2>Account Information</h2>
          <label className="form-label" htmlFor="name">
            Full Name
          </label>
          <input
            className="form-control"
            id="name"
            type="name"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
            <label className="form-label" htmlFor="username">
            username
          </label>
          <input
            className="form-control"
            id="username"
            type="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn btn-success mt-3 center">Update</button>
        </form>
      </div>
      <div className="col-4"></div>
    </div>
  );
};

export default Account;
