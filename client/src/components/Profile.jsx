const Profile = ({ user }) => {
  return (
    <div className="flex m-10 gap-10">
      <div>
        <h1 className="text-8xl bg-cyan-700 px-10 py-5 rounded-full">{user?.fullname[0]}</h1>
      </div>
      <div>
        <h1 className="text-4xl font-bold">{user?.fullname}</h1>
        <h2 className="text-3xl">{user?.username}</h2>
      </div>
    </div>
  );
};

export default Profile;