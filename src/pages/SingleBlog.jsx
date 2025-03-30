import React, { useEffect, useState } from "react";
import "../assets/css/Blogs.css"
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { blogTitle } = useParams(); // Get the blog slug from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://wp-react-store.aayurfarms.com/wp-json/wp/v2/posts?slug=${blogTitle}&_embed`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setPost(data[0]); // Get the first matching post
        } else {
          setPost(null); // No post found
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching post:", error);
        setLoading(false);
      });
  }, [blogTitle]);

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <>
      <div className="single-blog">
        
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} className="pos-heading"/>

        <div className="post-content">
        
          
          {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                  <img
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                    alt={post.title.rendered}
                    className="singel-blog-image"
                  />
                )}
          
          <p>{new Date(post.date).toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" })}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
        <div className="right-slider">
          <h2>Rigth-slider</h2>
        </div>
      </div>
      
    </>
  );
};

export default SingleBlog;
