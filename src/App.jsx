import Profile from "./components/Profile/Profile";

import UserData from "./userData.json";

function App() {
  return (
    <>
      <Profile {...UserData} />
    </>
  );
}

export default App;
