import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemText, ListSubheader } from "@mui/material";
import { useFetchedPosts } from "./usePostsList.js";

const PostsList = ({ activeUser }) => {
  const { posts, isLoading } = useFetchedPosts(activeUser);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
