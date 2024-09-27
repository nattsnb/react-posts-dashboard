import styles from "./commentsDashboard.module.css";
import UserButton from "../userButton/";
import PostsList from "../postsList/";
import { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Box } from "@mui/material";

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
          <div className={styles.buttonsRow}>
            {users.map((user) => (
              <UserButton
                key={user.id}
                userId={user.id}
                userName={user.username}
                activeUser={activeUser}
                newActiveUser={newActiveUser}
              ></UserButton>
            ))}
          </div>
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
