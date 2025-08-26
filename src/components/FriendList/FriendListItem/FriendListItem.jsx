import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friendListItem}>
      <img
        className={styles.friendImage}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={styles.friendName}>{name}</p>
      <p
        className={`${styles.friendStatus} ${
          isOnline ? styles.friendOnline : styles.friendOffline
        }`}
      >
        {isOnline ? "Online" : "Ofline"}
      </p>
    </li>
  );
};

export default FriendListItem;
