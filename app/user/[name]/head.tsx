import {redirect} from "next/navigation";
import React from "react";

async function getUsers() {
  const users = await fetch("http://localhost:3000/api/users");
  const result = await users.json();
  return result;
}

export default async function Head({params: {name}}: any) {
  const user = await getUsers();
  const data = user.find((user: any) => {
    return user.username === name;
  });
  if (!data) return redirect("https://google.com");
  return (
    <>
      <title>{data.name}</title>
    </>
  );
}
