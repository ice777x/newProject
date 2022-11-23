import React from "react";

async function getUsers() {
  const users = await fetch("https://ice777dev.vercel.app/api/users");
  const result = await users.json();
  return result;
}

export async function generateStaticParams() {
  const users = await getUsers();
  return users.map((user: any) => ({name: user.username}));
}

export default async function Page({params: {name}}: {params: {name: string}}) {
  const user = await getUsers();
  const filteredUser = user.filter(
    (user: {username: string}) => user?.username === name
  );
  if (filteredUser.length > 0) {
    return (
      <div>
        <h1>{filteredUser[0].name}</h1>
        <h2>{filteredUser[0].username}</h2>
        <img src={filteredUser[0].image} alt={filteredUser[0].name} />
        <p>{filteredUser[0].bio}</p>
      </div>
    );
  } else {
    return <h1>User not found</h1>;
  }
}
