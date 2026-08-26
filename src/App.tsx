import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search/Search";
import Home from "./Components/Home/Home/Home";

const App = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
