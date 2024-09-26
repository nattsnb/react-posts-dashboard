import styles from "./commentsDashboard.module.css";
import UserButton from "../userButton/";
import PostsList from "../postsList/";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

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
  const [activeUser, setActiveUser] = useState(false);
  return (
    <>
      <h1>Posts List</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div>
          <div className={styles.buttonsRow}>
            {users.map((user) => (
              <UserButton
                key={uuid()}
                userName={user.username}
                isActive={false}
              ></UserButton>
            ))}
          </div>
          <div className={styles.postsList}></div>
        </div>
      )}
    </>
  );
};

export default CommentsDashboard;
