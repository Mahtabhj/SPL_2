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

// function Searchbar({ searchQuery, setSearchQuery }) {
//     const [query, setQuery] = useState("");
//     const [data, setData] = useState([]);
//     const { search } = useLocation();
//     useEffect(() => {
//       const fetchData = async () => {
//         //  = await axios.get(`http://localhost:5000?q=${query}`);
//         const res = await axios.get("/posts"  + search);
//         setData(res.data);
//       };
//       if (query.length === 0 || query.length > 2) fetchData();
//     }, [query]);
  
//     return (
//       <div className="app">
//           <p>Hi</p>

//           <form action="/" method="get">
//         <label htmlFor="header-search">
//             <span className="visually-hidden">Search blog posts</span>
//         </label>
//         <input
//             value={searchQuery}
//             onInput={e => setSearchQuery(e.target.value)}
//             type="text"
//             id="header-search"
//             placeholder="Search blog posts"
//             name="s"
//         />
//         <button type="submit">Search</button>
//     </form>
//           {/* <input
//             className="search"
//             placeholder="Search..."
//             onChange={(e) => setQuery(e.target.value.toLowerCase())}
//           /> */}
//         {/* <Post posts={data} /> */}
//       </div>
//     );
//   }
  
const Searchbar = ({ searchQuery, setSearchQuery }) => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
);

  export default Searchbar;