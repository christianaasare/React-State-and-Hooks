import React, { useState, useEffect } from "react";
import axios from "axios";

function StateAndEffect() {
    const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const newPosts = res.data.data.children
          .map(obj => obj.data);
  
        setPosts(newPosts);
      });
  }, []);
  
    return (
      <div>
        <h1>Reddit Posts</h1>
        <ol>
          {posts.map(post => (
            <li key={post.id}>
              {post.title}
            </li>
          ))}
        </ol>
      </div>
    );
  }

  export default StateAndEffect