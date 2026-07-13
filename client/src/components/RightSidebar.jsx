const RightSidebar = () => {
  return (
    <div className="space-y-6">

      <div className="bg-white rounded-3xl shadow-lg p-6">
        <h2 className="font-bold text-xl mb-4">
          Trending
        </h2>

        <div className="space-y-3">
          <p>#ReactJS</p>
          <p>#TailwindCSS</p>
          <p>#JavaScript</p>
          <p>#NodeJS</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-6">
        <h2 className="font-bold text-xl mb-4">
          Suggested Users
        </h2>

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex justify-between items-center mb-4"
          >
            <div className="flex gap-3 items-center">
              <img
                src={`https://i.pravatar.cc/150?img=${item}`}
                className="w-10 h-10 rounded-full"
              />

              <div>
                <h3>User {item}</h3>
                <p className="text-sm text-gray-500">@user{item}</p>
              </div>
            </div>

            <button className="bg-cyan-600 text-white px-3 py-1 rounded-full">
              Follow
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default RightSidebar;