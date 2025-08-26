import FriendList from "./components/FriendList/FriendList";
import ProfileCard from "./components/Profile/ProfileCard";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import userData from "./userData.json";
import friendsData from "./friends.json";
import transactions from "./transactions.json";

function App() {
  return (
    <>
      <ProfileCard {...userData} />
      <FriendList dataFriends={friendsData} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
