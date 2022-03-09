import { Navigate, Route, Routes } from "react-router-dom";
import Country from "../pages/Country";
import Home from "../pages/Home";
import Page404 from "../pages/Page404";

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
      
      <Route path="/" element={<Home />} />
      <Route path=":code" element={<Country />} />
    </Routes>
  );
};

export default RouterApp;
