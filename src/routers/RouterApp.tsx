import { Route, Routes } from "react-router-dom";
import Country from "../pages/Country";
import Home from "../pages/Home";

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":code" element={<Country />} />
    </Routes>
  );
};

export default RouterApp;
