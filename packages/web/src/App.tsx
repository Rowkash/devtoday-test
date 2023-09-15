import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import Post from "./components/Post";
import { IPost } from "./types/Post";

// const API_URL = "https://9ywwp6-3001.csb.app";
const API_URL = "http://localhost:3001/posts";
// const API_URL = "https://jsonplaceholder.typicode.com/posts";

/** Task part 2.
 * 1. Get posts from a previously created endpoint (API_URL above)
 * 2. Using an existing "Post" component,
 *    display a list of posts in the "tbody" tag below
 * 3. Highlight each post whose ID is a multiple of 10
 *    by passing the corresponding prop
 */

const App = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    axios
      .get<IPost[]>(API_URL)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="App">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>User Posts Count</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post: IPost) => (
            <Post post={post} key={post.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
