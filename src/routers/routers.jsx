import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import CarsList from "../pages/CarsList";
import CarDetails from "../pages/carDetails";
import Blog from "../pages/blog";
import BlogDetails from "../pages/blogDetails";
import NotFound from "../pages/notFound";
import Contact from "../pages/contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarsList />} />
      <Route path="/cars/:carItem" element={<CarDetails />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Routers;
