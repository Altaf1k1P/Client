import { useEffect, useState } from "react";
import "../assets/css/Blogs.css"
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  

  useEffect(() => {
    fetch("https://wp-react-store.aayurfarms.com/wp-json/wp/v2/posts?_embed")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
      
  }, []);

  return (
    <div className="blog-container">
      <h2 className="blog-heading">Blog Posts</h2>

      <div id="blog-grid" className="blog-grid">
        {blogs.map((post) => (
          <div key={post.id} className="blog-card">
            {/* Featured Image */}
            <Link to={`/blog/${post.slug}`}>
            {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
              <img
                src={post._embedded["wp:featuredmedia"][0].source_url}
                alt={post.title.rendered}
                className="blog-image"
              />
            )}</Link>

            {/* Date Badge */}
            <div className="blog-date">
            <i className="bx bx-coffee-bean bx-burst bx-rotate-90">

              {new Date(post.date).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
              })}</i>
              
            </div>

            <div className="blog-content">
              {/* Category */}
              {/* {post._embedded?.["wp:term"]?.[0]?.[0]?.name && (
                <p className="blog-category">
                  {post._embedded["wp:term"][0][0].name}
                </p>
              )} */}

              {/* Title */}
              <Link to={`/blog/${post.slug}`}>
              <h3
                className="blog-title"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              /></Link>

              {/* Excerpt */}
              <p
                className="blog-excerpt"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />

              {/* Read More Button */}
              <Link to={`/blog/${post.slug}`}>
                Read More
              </Link>

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
