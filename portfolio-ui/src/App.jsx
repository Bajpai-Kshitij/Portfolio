import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Portfolio */}
        <Route path="/" element={<HomePage />} />

        {/* Blog Listing */}
        <Route path="/blog" element={<BlogPage />} />

        {/* Blog Post */}
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}