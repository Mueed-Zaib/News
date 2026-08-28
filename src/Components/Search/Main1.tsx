import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = import.meta.env.VITE_API_KEY;

const Main1 = () => {
  const [data, setData] = useState<any>(null);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}&pageSize=10`,
        );

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const mainArticle = data?.articles?.[0];
  const otherArticles = data?.articles?.slice(1);

  const handleSubmit = async (): Promise<any> => {
    if (!query.trim()) {
      return true;
    }

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&pageSize=10`,
      );

      const result = await response.json();

      if (result.articles.length === 0) {
        setData({ articles: [] });
        return;
      }

      setData(result);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <div className="w-full flex flex-wrap lg:flex-row sm:flex-col md:flex-col items-center gap-7">
        <input
          className="flex-1 w-full border border-gray-300 outline-amber-500 rounded-lg px-4 py-2"
          placeholder="Search for new articles..."
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />

        <div className="flex flex-wrap items-center justify-start md:w-full sm:w-full xs:w-full lg:w-120 gap-5">
          <div>
            <label className="text-sm font-medium text-gray-700 mr-3">
              Sort by
            </label>

            <select className="w-40 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-amber-300 focus:ring-2">
              <option>Most Recent</option>
              <option>Most Relevant</option>
              <option>Most Popular</option>
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

        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition-colors cursor-pointer lg:w-30 md:w-full sm:w-full xs:w-full"
        >
          Search
        </button>
      </div>

      {data && data.articles?.length === 0 && (
        // <p className="text-center mt-10 text-gray-500 text-lg">
        //   No articles found
        // </p>
        //       const noArticle = () => {
        // return (
        <div className="w-full mt-10 gap-5 flex flex-col justify-center items-center">
          <p>No article found</p>
          <button className="p-2 rounded bg-amber-400">
            <Link to="/">Back Home</Link>
          </button>
        </div>
        // );
        // };
      )}

      {mainArticle && (
        <div className="w-full gap-6 flex lg:flex-row md:flex-col xs:flex-col mt-12 py-4">
          <div className="lg:w-[50%] md:w-full xs:w-full h-95">
            <img
              src={mainArticle.urlToImage}
              alt="Article Thumbnail"
              className="w-full h-full object-cover rounded"
            />
          </div>

          <div className="lg:w-[50%] md:w-full xs:w-full flex justify-center flex-col">
            <span className="font-bold mt-3">
              {new Date(mainArticle.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>

            <h1 className="text-2xl font-bold mt-3">{mainArticle.title}</h1>

            <p className="mt-2">{mainArticle.description}</p>
          </div>
        </div>
      )}
      {otherArticles && (
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherArticles.map((article: any, idx: number) => (
            <div
              key={idx}
              className="h-full w-full pb-8 flex flex-col justify-evenly"
            >
              <img
                src={article.urlToImage}
                alt="Article Thumbnail"
                className="w-full h-[60%] object-cover rounded"
              />

              <span className="font-bold p-5 h-[10%]">
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>

              <h2 className="font-bold p-5 h-[15%]">{article.title}</h2>

              <p className="text-sm p-5 h-[15%]">{article.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Main1;
