import {FaAirbnb, FaBitcoin} from "react-icons/fa";
const posts = [
  {
    id: 1,
    title: "Preview Mode for Static Generation",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, libero quibusdam incidunt enim ad dolor qui soluta. Totam voluptatem deleniti vel voluptatibus tempora, sequi neque labore aut sunt dolor expedita? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, libero quibusdam incidunt enim ad dolor qui soluta. Totam voluptatem deleniti vel voluptatibus tempora, sequi neque labore aut sunt dolor expedita?",
    image: "/peaco.jpg",
    author: {username: "bsggr78", name: "BasarJS"},
    icon: <FaAirbnb />,
    date: "March 21, 2021",
    likes: 20,
    comment: 19,
    saved: 5,
    tags: ["netflix", "c#", "javascript", "typescript", "next"],
  },
  {
    id: 2,
    title: "Dynamic Routing and Static Generation",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, libero quibusdam incidunt enim ad dolor qui soluta. Totam voluptatem deleniti vel voluptatibus tempora, sequi neque labore aut sunt dolor expedita?",
    image:
      "https://images.unsplash.com/photo-1607893407846-49905270209e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=100",
    author: {username: "fufus", name: "Fufus Usta"},
    icon: <FaBitcoin />,
    date: "March 7, 2021",
    likes: 20,
    comment: 19,
    saved: 5,
    tags: ["netflix", "c#", "javascript", "typescript", "next"],
  },
  {
    id: 3,
    title: "From Server-side Rendering to Static Generation",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, libero quibusdam incidunt enim ad dolor qui soluta. Totam voluptatem deleniti vel voluptatibus tempora, sequi neque labore aut sunt dolor expedita?",
    image: "/peaco.jpg",
    author: {username: "iceweasel", name: "iceweasel"},
    icon: <FaAirbnb />,
    date: "March 2, 2021",
    likes: 20,
    comment: 19,
    saved: 5,
    tags: ["netflix", "c#", "javascript", "typescript", "next"],
  },
];

export default posts;
