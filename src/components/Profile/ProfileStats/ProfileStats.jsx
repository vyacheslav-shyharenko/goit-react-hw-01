import styles from "./ProfileStats..module.css";

const ProfileStats = ({ followers, likes, views }) => {
  return (
    <ul className={styles.profileStatsList}>
      <li className={styles.profileStatsItem}>
        <span>Followers</span> <span>{followers}</span>
      </li>
      <li className={styles.profileStatsItem}>
        <span>Views</span> <span>{views}</span>
      </li>
      <li className={styles.profileStatsItem}>
        <span>Likes</span> <span>{likes}</span>
      </li>
    </ul>
  );
};

export default ProfileStats;
