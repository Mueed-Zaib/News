import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_API_KEY;
const Main1 = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}&pageSize=6`,
        );

        if (!response.ok) {
          throw new Error("API request failed");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const otherArticles = data?.articles.slice(1);
  const mainArticle = data?.articles[0];

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
      <>
        <div className="w-full  gap-6 flex lg:flex-row md:flex-col xs:flex-col mt-12 py-4">
          <div className="lg:w-[50%] md:w-full xs:w-full h-95 ">
            {mainArticle && (
              <>
                <img
                  src={mainArticle.urlToImage}
                  alt="Article Thumbnail"
                  className="w-full h-full object-cover rounded"
                />
              </>
            )}
          </div>
          <div className="lg:w-[50%] md:w-full xs:w-full flex justify-center flex-col">
            {mainArticle && (
              <>
                <span className=" font-bold mt-3">August 25, 2026</span>
                <h1 className="text-2xl font-bold mt-3">{mainArticle.title}</h1>

                <p className="mt-2">{mainArticle.description}</p>
              </>
            )}
          </div>
        </div>
        <div className="h-full w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherArticles?.map((article: any, idx: number) => (
            <div
              key={idx}
              className="h-full w-full pb-8 flex flex-col justify-evenly"
            >
              <img
                src={article.urlToImage}
                className="w-full h-[60%] object-cover rounded"
              />
              <>
                <span className=" font-bold p-5 h-[10%] ">August 25, 2026</span>
                <h2 className="font-bold p-5 h-[15%]">{article.title}</h2>

                <p className="text-sm p-5 h-[15%]">{article.description}</p>
              </>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default Main1;
