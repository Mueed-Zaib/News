import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

const Main3 = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`,
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
  return (
    <div className="h-full w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {otherArticles?.map((article: any, index: number) => (
        <div
          key={index}
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
  );
};

export default Main3;
