import styles from "./userButton.module.css";

const ButtonStateClassArgument = {
  active: styles.activeButton,
  inactive: styles.inactiveButton,
};
const UserButton = ({ userId, userName, activeUser, newActiveUser }) => {
  return (
    <button
      className={
        activeUser === userId
          ? ButtonStateClassArgument.active
          : ButtonStateClassArgument.inactive
      }
      onClick={() => newActiveUser(userId)}
    >
      {userName}
    </button>
  );
};

export default UserButton;
