import styles from "./commentsDashboard.module.css";
import UserButton from "../userButton/UserButton.jsx";
import PostsList from "../postsList/PostsList.jsx";
import { useEffect, useState } from "react";

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
  console.log(users);
  return (
    <div>
      <div className={styles.buttonsRow}></div>
      <div className={styles.postsList}></div>
    </div>
  );
};

export default CommentsDashboard;
