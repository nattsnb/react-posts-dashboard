import styles from "./commentsDashboard.module.css";
import UserButton from "../userButton/UserButton.jsx";
import PostsList from "../postsList/PostsList.jsx";

const CommentsDashboard = () => {
  return (
    <div>
      <div className={styles.buttonsRow}></div>
      <div className={styles.postsList}></div>
    </div>
  );
};

export default CommentsDashboard;
