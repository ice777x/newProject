export interface Post {
  id: number;
  title: string;
  image: string;
  content: string;
  author: {
    username: string;
    name: string;
  };
  date: string;
  icon: any;
  likes: number;
  comment: number;
  saved: number;
  tags: string[];
}
