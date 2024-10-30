import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [postIndex, setPostIndex] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 8)));
  }, []);

  const handleClick = (index) => {
    setPostIndex(postIndex === index ? null : index);
  };

  return (
    <div>
      <h2>showing {posts.length} post of 100</h2>
      <div className="grid-container">
        {posts.map((post, index) => (
          <div
            className="grid-item"
            key={post.id}
            onClick={() => handleClick(index)}
          >
            <h5 className={postIndex === index ? "blue" : "green"}>
              {post.title}
            </h5>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
