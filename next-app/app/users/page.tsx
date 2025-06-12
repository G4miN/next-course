import React from "react";
import { User } from "../types/User";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", //  this is useful if i have date that not changes frequently
    // next: { revalidate: 10 }, //use this when u need to keep fresh data

    //note with axios u cant do this
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  const users = (await res.json()) as User[];

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
