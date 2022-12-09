import { useState, useEffect } from "react";
import "./HomeAuth.css";
import axios from "axios";

const HomeAuth = () => {

  const [blogs, setBlogs] = useState([
    {externalUrl:"https://ipfs.io/ipfs/Qmd7DuscoYu3bqBavGxcxvoR1yZDhp8B4sNncyorZphucM",
    owner_of:""
  }
  ]);
  const [blogsContent, setBlogsContent] = useState();

  const fetchBlogsContent = async() => {
    const limit5 = blogs?.slice(0,5);
    let contentBlog = [];

    if (limit5) {
      limit5.map(async (blog) => {
        if (blog) {
          const { externalUrl, owner_of } = blog;
          const res = await axios.get(externalUrl);
          const text = res.data.text.toString();
          const title = res.data.title;
          contentBlog.push({ title, text, owner_of, externalUrl });
        }
      });
    }
  
    setBlogsContent(contentBlog);

  };

  return (
    <div className="homeAuth_container">
      
    </div>
  );
};

export default HomeAuth;
