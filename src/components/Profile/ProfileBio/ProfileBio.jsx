import styles from "./ProfileBio.module.css";
console.log("🚀 ~ styles:", styles);

const ProfileBio = ({ avatar, tag, location, username }) => {
  return (
    <div className={styles.profileBio}>
      <img className={styles.profileAvatar} src={avatar} alt="User avatar" />
      <p className={styles.profileName}>{username}</p>
      <p className={styles.profileTag}>{tag}</p>
      <p className={styles.profileLocation}>{location}</p>
    </div>
  );
};

export default ProfileBio;
