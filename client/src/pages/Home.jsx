import Navbar from "../components/Navbar";

import Profile from "../components/Profile"


const Home = ({user}) => {
  const isAuthenticated = !!user;
  return (
    <div>
      <Navbar success={isAuthenticated} />

      <Profile user={user} />
    </div>
  )
}

export default Home