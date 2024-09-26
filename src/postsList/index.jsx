import styles from "./postsList.module.css";
import PostTitle from "../postTitle/";
import { useEffect, useState } from "react";

const useFetchedPosts = (userId) => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  if (userId) {
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => {
          console.log("error fetching data", error);
        })
        .finally(() => setIsLoading(false));
    }, [userId]);
    return { posts, isLoading };
  }
};
const PostsList = ({ activeUser }) => {
  const { posts, isLoading } = useFetchedPosts(activeUser);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsList;
