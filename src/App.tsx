import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Article from "./modules/feed/components/Articles/Aricle";
import ArticleSkeleton from "./modules/feed/components/ArticleSkeleton/ArticleSkeleton";
import ShoppingCart from "./modules/feed/components/ShoppingCart/ShoppingCart";

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
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/set-state-in-effect
  //   setLoading(true);

  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data.posts);
  //     })
  //     .catch((err) => console.error(err))
  //     .finally(() => setLoading(false));
  // }, []);

  useEffect(() => {
    setTimeout(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, 1500); 
}, []);

  return (
    <>
      <Header />
      <Banner />
      <ShoppingCart/>
      {loading
        ? Array.from({ length: 5 }).map((_, i) => <ArticleSkeleton key={i} />)
        : posts.map((post) => <Article key={post.id} post={post} />)}
    </>
  );
}

export default App;
