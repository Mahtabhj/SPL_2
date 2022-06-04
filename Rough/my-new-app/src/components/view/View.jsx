import React from "react";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./view.css";
import axios from "axios"
import { useLocation } from "react-router";
import Houses from "../../components/houses/Houses";
import Hostels from "../../components/hostels/Hostels";

export default function View() {
  const [posts, setPosts] = useState([]);
  const [houses,setHouses] = useState([]);
  const [hostels,setHostels] = useState([]);

  const { search } = useLocation();
  

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
  }, [search]);
  return (
  
    <>
      
      <div className="home">

      {/* <button onClick={<Posts posts={posts}/>}>
  Activate Lasers
</button> */}

      {/* <li className="topListItem">
            <Link className="link" to="/write">
              Rent
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/writehouse">
              House
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/writehostel">
              Hostel
            </Link>
          </li> */}
        <Posts posts={posts}/>
       
        <Houses posts={houses}/>

        <Hostels posts={hostels}/>
        <Sidebar />
      </div>
    </>
    
  );
}
