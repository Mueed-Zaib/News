const Main1 = () => {
  return (
    <div>
      <div className="w-full flex flex-wrap lg:flex-row sm:flex-col md:flex-col items-center gap-7">
        <input
          className="flex-1 w-full border border-gray-300 outline-amber-500 rounded-lg px-4 py-2 "
          placeholder="Search for new articles..."
          type="text"
        />
        <div className="flex flex-wrap items-center justify-start md:w-full sm:w-full xs:w-full lg:w-120  gap-5">
          <div>
            <label className="text-sm font-medium text-gray-700  outline-amber-500 mr-3">
              Sort by
            </label>
            <select className="w-40 px-4 py-2 border border-gray-300 rounded-lg  outline-none focus:ring-amber-300 focus:ring-2">
              <option>Most Recent</option>
              <option>Most Relevant</option>
              <option>Most Papular</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mr-3">
              From
            </label>
            <select className="w-40 px-4 py-2 border border-gray-300 outline-none focus:ring-amber-300 focus:ring-2 rounded-lg">
              <option>All Time</option>
              <option>Today</option>
              <option>Last 7 days</option>
              <option>Last 14 days</option>
              <option>Last month</option>
            </select>
          </div>
        </div>
        <button className="px-6 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition-colors cursor-pointer lg:w-30 md:w-full sm:w-full xs:w-full">
          Search
        </button>
      </div>
    </div>
  );
};

export default Main1;
