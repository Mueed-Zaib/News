import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_API_KEY;
const Main2 = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${API_KEY}`,
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

  const mainArticle = data?.articles[0];

  return (
    <div className="w-full  gap-6 flex lg:flex-row md:flex-col xs:flex-col  p-4">
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
  );
};

export default Main2;
