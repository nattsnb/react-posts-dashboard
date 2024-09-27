import styles from "./commentsDashboard.module.css";
import PostsList from "../postsList/";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@mui/material";

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

  const newActiveUser = (userId) => {
    setActiveUser(userId);
  };

  return (
    <>
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
          {activeUser && (
            <div className={styles.postsList}>
              <PostsList activeUser={activeUser} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CommentsDashboard;
