import React from "react";

async function getUsers() {
  const posts = await fetch("https://ice777dev.vercel.app/api/users/add", {
    method: "POST",
    body: JSON.stringify({
      name: "BasarJS",
      username: "bsggr78",
      image: "/peaco.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non doloribus accusantium dolor odio sunt hic quod esse, nihil temporibus autem.",
      socials: {
        github: "https://github.com/bsggr78",
        twitter: "https://twitter.com/bsggr78",
        linkedin: "https://linkedin.com/in/bsggr78",
        instagram: "https://instagram.com/bsggr78",
      },
      password: "123456",
      country: "Turkey",
    }),
  });
  if (posts.status === 200) {
    return true;
  } else {
    return false;
  }
}

export default async function Page() {
  const user = await getUsers();
  return <div>List Page</div>;
}
