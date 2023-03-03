import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  return (
    <div>
      <h1 className="title">Liste des utilisateurs ⤵️</h1>
      {listOfUsers.map((user) => (
        <div key={user.id} className="card">
          <h2>{user.name}</h2>
          <p>📧: {user.email}</p>
          <p>☎️: {user.phone}</p>
          <p>📍: {user.address.street}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
