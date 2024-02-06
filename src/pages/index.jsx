import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header, Footer } from "./Layout";

import Home from "./home";
import About from "./About";
import Shop from "./Shop";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Test from "./test";
import BlogDetails from "./Blog_Details";
import Cart from "./Cart";
import LogIn from "./Login";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Fashion-Store/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="shop" element={<Shop />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
            <Route path="test" element={<Test />} />
            <Route path="blogdetails" element={<BlogDetails />} />
            <Route path="login" element={<LogIn />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
