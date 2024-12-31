import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import "./ChiTietBlog.scss";
import CategoryList from "../../components/ListTheLoai/CategoryList";
import ListBlog from "../../components/ListBlog/ListBlog";
const BlogDetail = () => {
  const { tieude } = useParams(); 
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://baominh.shop/chitietblog/${tieude}`) 
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .catch((error) => console.error("Error fetching blog details:", error));
  }, [tieude]); 

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="blog-detail-container">

      <div className="blog-detail">
        <h1>{blog.tieude_blog}</h1>
        <div dangerouslySetInnerHTML={{ __html: blog.noidung }} />
      </div>
      <div className="category-sidebar">
        <CategoryList />
        <ListBlog/>

      </div>
    </div>
  );
};

export default BlogDetail;