import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_API_KEY;
const Main2 = () => {
  const [data, setData] = useState<any>(null);
  const [index, setIndex] = useState(1);

  const pageSize: number = 5;
  const totalPages: number = Math.ceil((data?.totalResults || 0) / pageSize);

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=${API_KEY}&page=${index}&pageSize=${pageSize}`,
    );
    const result = await response.json();
    setData(result);
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  const mainArticle = data?.articles[0];

  const otherArticles = data?.articles.slice(1);

  return (
    <>
      <div className="w-full  gap-6 flex lg:flex-row md:flex-col xs:flex-col  py-4">
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
              <span className="font-bold mt-3">
                {new Date(mainArticle.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
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
              <span className="font-bold p-5 h-[10%]">
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <h2 className="line-clamp-2 font-bold px-5">{article.title}</h2>
              <p className="line-clamp-2 px-5 text-sm mt-3">
                {article.description}
              </p>
            </>
          </div>
        ))}
      </div>
      <div className="p-5 font-bold text-black">
        <div className="flex flex-col md:flex-row sm:flex-row lg:flex-row items-center justify-center gap-3 mt-5">
          <button
            disabled={index === 1}
            onClick={() => setIndex(index - 1)}
            className="px-10 py-3 cursor-pointer active:scale-95 bg-amber-300 rounded-2xl disabled:opacity-50"
          >
            Prev
          </button>

          <div className="flex flex-wrap justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page: number) => (
                <button
                  key={page}
                  onClick={() => setIndex(page)}
                  className={`px-4 py-2 rounded ${
                    index === page
                      ? "bg-amber-400 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {page}
                </button>
              ),
            )}
          </div>

          <button
            disabled={index === totalPages}
            onClick={() => setIndex(index + 1)}
            className="px-10 py-3 cursor-pointer active:scale-95 bg-amber-300 rounded-2xl disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Main2;
