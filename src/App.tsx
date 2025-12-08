import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Article from "./modules/feed/components/articles/Aricle";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  
  useEffect(() => {
  fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      setPosts(data.posts);
    })
    .catch((err) => console.error(err));
}, []);

  
  return (
    <>
      <Header />
      <Banner />
      {posts.map((post) => (
        <Article key={post.id} post={post} />
      ))}
    </>
  );
}

export default App;
