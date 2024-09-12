import axios from "axios";
import React, { useEffect, useState } from "react";

function UserList() {
  const [listOfUSer, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1 className="title">List of Users</h1>
      <div className="container">
        {listOfUSer.map((user) => (
          <div className="box" key={user.id}>
            <h2>Name : {user.name} </h2>
            <h2>( UserName : {user.username} )</h2>
            <h4>Email : {user.email}</h4>
            <h4>Phone : {user.phone}</h4>
            <h4>
              Address : {user.address.street} , {user.address.suite} ,{" "}
              {user.address.city} , {user.address.zipcode}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
