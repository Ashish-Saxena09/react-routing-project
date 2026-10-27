import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Write your Username"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Write your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Write your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (password === "Ashish" && email === "saxenaashish@gmail.com") {
              alert("Login successfully");
            } else {
              alert("Login failed");
            }
            setName("");
            setEmail("");
            setPassword("");
          }}
        >
          Submit
        </button>
        <div className="info">
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </div>
      </form>
    </div>
  );
}
