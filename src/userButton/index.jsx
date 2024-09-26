import styles from "./userButton.module.css";

const ButtonStateClassArgument = {
  active: styles.activeButton,
  inactive: styles.inactiveButton,
};
const UserButton = ({ userName, isActive }) => {
  return (
    <button
      className={
        isActive
          ? ButtonStateClassArgument.active
          : ButtonStateClassArgument.inactive
      }
    >
      {userName}
    </button>
  );
};

export default UserButton;
