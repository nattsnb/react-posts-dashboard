import styles from "./commentsDashboard.module.css";
import PostsList from "../postsList/";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@mui/material";

const DisplayMode = {
  posts: "posts",
  photos: "photos",
};

const useFetchedUsers = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.log("error fetching data", error);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return { users, isLoading };
};

const CommentsDashboard = () => {
  const { users, isLoading } = useFetchedUsers();
  const [activeUser, setActiveUser] = useState(null);
  const [displayMode, setDisplayMode] = useState(DisplayMode.posts);

  const newActiveUser = (userId) => {
    setActiveUser(userId);
  };

  const switchDisplayModeToPhotos = () => {
    setDisplayMode(DisplayMode.photos);
  };

  const switchDisplayModeToPosts = () => {
    setDisplayMode(DisplayMode.posts);
  };

  return (
    <>
      <div>
        <Button
          variant={"contained"}
          color={displayMode === DisplayMode.posts ? "success" : ""}
          onClick={switchDisplayModeToPosts}
        >
          Posts
        </Button>
        <Button
          variant={"contained"}
          color={displayMode === DisplayMode.photos ? "success" : ""}
          onClick={switchDisplayModeToPhotos}
        >
          Photos
        </Button>
      </div>

      <h1>Posts List</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div>
          <ButtonGroup>
            {users.map((user) => (
              <Button
                key={user.id}
                variant={activeUser === user.id ? "contained" : "outlined"}
                color={activeUser === user.id ? "success" : ""}
                onClick={() => newActiveUser(user.id)}
              >
                {user.username}
              </Button>
            ))}
          </ButtonGroup>
          {activeUser && displayMode === DisplayMode.posts && (
            <div className={styles.postsList}>
              <PostsList activeUser={activeUser} />
            </div>
          )}
          {activeUser && displayMode === DisplayMode.photos && (
            <div className={styles.postsList}>Photos Placeholder</div>
          )}
        </div>
      )}
    </>
  );
};

export default CommentsDashboard;
