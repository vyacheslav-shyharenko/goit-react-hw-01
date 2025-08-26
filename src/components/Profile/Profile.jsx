import ProfileBio from "./ProfileBio/ProfileBio";
import ProfileStats from "./ProfileStats/ProfileStats";
import styles from "./Profile.module.css";

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, likes, views },
}) => {
  return (
    <div className={styles.profileCard}>
      <ProfileBio {...{ username, tag, location, avatar }} />
      <ProfileStats {...{ followers, likes, views }} />
    </div>
  );
};

export default Profile;
