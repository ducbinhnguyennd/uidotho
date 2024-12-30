import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link từ React Router
import "./ListBlog.scss";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://baominh.shop/getblog")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div className="news-list">
      <div className="news-header">TIN TỨC MỚI</div>
      <ul className="news-items">
        {blogs.slice(0, 2).map((blog) => (
          <li key={blog._id} className="news-item">
            <div className="news-thumbnail">
              <img src={blog.img_blog} alt={blog.tieude_blog} />
            </div>
            <Link
              to={`/chitietblog/${blog.tieude_khongdau}`} 
              className="news-title"
              target="_blank"
              rel="noopener noreferrer"
            >
              {blog.tieude_blog}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListBlog;
