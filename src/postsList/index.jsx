import styles from "./postsList.module.css";
import { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemText, ListSubheader } from "@mui/material";

const useFetchedPosts = (userId) => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => {
          console.log("error fetching data", error);
        })
        .finally(() => setIsLoading(false));
    }
  }, [userId]);
  return { posts, isLoading };
};
const PostsList = ({ activeUser }) => {
  const { posts, isLoading } = useFetchedPosts(activeUser);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <List>
          {posts.map((post) => (
            <li key={post.id}>
              <ul>
                <ListSubheader>{post.title}</ListSubheader>
                <ListItem>
                  <ListItemText primary={post.body} />
                </ListItem>
              </ul>
            </li>
          ))}
        </List>
      )}
    </div>
  );
};

export default PostsList;
