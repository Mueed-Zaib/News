import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_API_KEY;
const Main2 = () => {
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
  );
};

export default Main2;
