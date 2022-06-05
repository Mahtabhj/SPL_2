import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
// import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./search.css";

import { useLocation } from "react-router";
import Houses from "../../components/houses/Houses";
import Hostels from "../../components/hostels/Hostels";
import Post from "../post/Post";
import Searchbar from "./Searchbar";

function Search() {
    const [posts, setPosts] = useState([]);
  const [houses,setHouses] = useState([]);
  const [hostels,setHostels] = useState([]);
  const { search1 } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search)
      
      setPosts(res.data);

      const res1 = await axios.get("/houses" + search)

      setHouses(res1.data);

      const res2 = await axios.get("/hostels" + search)

      setHostels(res2.data);

    };
    fetchPosts();
  }, [search1]);
    // const [query, setQuery] = useState("");
    // const [data, setData] = useState([]);
    // const { search } = useLocation();
    // useEffect(() => {
    //   const fetchData = async () => {
    //     //  = await axios.get(`http://localhost:5000?q=${query}`);
    //     const res = await axios.get("/posts"  + search);
    //     setData(res.data);
    //   };
    //   if (query.length === 0 || query.length > 2) fetchData();
    // }, [query]);
   
    // return (
    //   <div className="app">
    //       <p>Hi</p>

    //       <Searchbar/>
    //       {/* <input
    //         className="search"
    //         placeholder="Search..."
    //         onChange={(e) => setQuery(e.target.value.toLowerCase())}
    //       /> */}
    //     {/* <Post posts={data} /> */}
    //   </div>
    // );
    const filterPosts = (posts, query) => {
        if (!query) {
            return posts;
        }
    
        return posts.filter((post) => {
            const postName = post.title.toLowerCase();
            return postName.includes(query);
        });
    };
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(posts, searchQuery);

    return (
        <div>
            <div>
                <Searchbar 
            searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                />
            <ul>
                {filteredPosts.map(post => (
                    // <li key={post.key}>{post.title}</li>
                    <Posts posts={filteredPosts}/>
                ))}
            </ul> 
            </div>
           
           
        </div>
    );
  }
  
  export default Search;