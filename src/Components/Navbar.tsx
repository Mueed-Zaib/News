import { useState } from "react";

const Navbar = () => {
  const [menu, setmenu] = useState(false);
  return (
    <>
      <div className="bg-black p-4 w-full text-white text-2xl flex items-center justify-between  ">
        <div className=" w-[25%] xs:w-[50%] font-bold">
          <span>News</span>
          <span className="text-amber-300"> App</span>
        </div>
        <div className="w-[75%] xs:w-[50%] flex items-center  justify-end">
          <div className="flex gap-5 md:hidden sm:hidden xs:hidden lg:flex">
            <p className="hover:text-amber-300 transition cursor-pointer">
              Home
            </p>
            <p className="hover:text-amber-300 transition cursor-pointer">
              Search
            </p>
            <p className="hover:text-amber-300 transition cursor-pointer">
              Business
            </p>
            <p className="hover:text-amber-300 transition cursor-pointer">
              Technology
            </p>
            <p className="hover:text-amber-300 transition cursor-pointer">
              Sports
            </p>
            <p className="hover:text-amber-300 transition cursor-pointer">
              Entertainment
            </p>
            <p className="hover:text-amber-300 transition cursor-pointer">
              Health
            </p>
            <p className="hover:text-amber-300 transition cursor-pointer">
              Science
            </p>
          </div>
          <button onClick={() => setmenu(!menu)} className="lg:hidden md:flex">
            {menu ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {menu && (
        <div className="h-full w-full gap-3 p-3 text-xl text-white bg-black font-medium lg:hidden md:flex md:flex-col">
          <p className=" cursor-pointer">Home</p>
          <p className=" cursor-pointer">Search</p>
          <p className=" cursor-pointer">Business</p>
          <p className=" cursor-pointer">Technology</p>
          <p className=" cursor-pointer">Sports</p>
          <p className=" cursor-pointer">Entertainment</p>
          <p className=" cursor-pointer">Health</p>
          <p className=" cursor-pointer">Science</p>
        </div>
      )}
    </>
  );
};

export default Navbar;
