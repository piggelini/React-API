import './App.css';
import Post from './components/Post';
import { useState, useEffect } from "react";
import axios from "axios";



function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const resPosts = res.data;
        setPosts(resPosts);
      })
  })

  return (
    <>
      {posts && posts.map((post) => {
        return <Post title={post.title} text={post.body} userId={post.id} />
      })}

    </>
  );
}

export default App;
