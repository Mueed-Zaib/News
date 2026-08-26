import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search/Search";
import Home from "./Components/Home/Home/Home";
import Business from "./Components/Business/Business";
import Technology from "./Components/Technology/Technology";
import Sport from "./Components/Sport/Sport";
import Entertainment from "./Components/Entertainment/Entertainment";
import Health from "./Components/Health/Health";
import Science from "./Components/Science/Science";

const App = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Business" element={<Business />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/Sport" element={<Sport />} />
          <Route path="/Entertainment" element={<Entertainment />} />
          <Route path="/Health" element={<Health />} />
          <Route path="/Science" element={<Science />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
