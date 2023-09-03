// src/App.js
import React, { useState } from "react";

import CommentList from "./components/CommentList";
import PostList from "./components/PostList";

function App() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="App">
      <h1>Comment Filtering App</h1>
      <div className="container">
        <PostList onPostSelect={setSelectedPost} />
        {selectedPost && <CommentList selectedPost={selectedPost} />}
      </div>
    </div>
  );
}

export default App;
