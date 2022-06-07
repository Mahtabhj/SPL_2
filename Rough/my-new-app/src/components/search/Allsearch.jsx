// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";
// import "./topbar.css";

// export default function Topbar() {
//   const { user } = useContext(Context);
//   const PF = "http://localhost:5000/images/"

//   const handleLogout = () => {
//     dispatch({ type: "LOGOUT" });
//   };
//   return (
//     <div className="top">
//       <div className="topLeft">
//         <i className="topIcon fab fa-facebook-square"></i>
//         <i className="topIcon fab fa-instagram-square"></i>
//         <i className="topIcon fab fa-pinterest-square"></i>
//         <i className="topIcon fab fa-twitter-square"></i>
//       </div>
//       <div className="topCenter">
//         <ul className="topList">
//           <li className="topListItem">
//             <Link className="link" to="/">
//               HOME
//             </Link>
//           </li>
//           <li className="topListItem">ABOUT</li>
//           <li className="topListItem">CONTACT</li>
//           <li className="topListItem">
//             <Link className="link" to="/write">
//               WRITE
//             </Link>
//           </li>
//           {user && <li className="topListItem">LOGOUT</li>}
//         </ul>
//       </div>
//       <div className="topRight">
//         {user ? (
//           <Link className="link" to="/settings">
//             <img
//               className="topImg"
//               src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//             />
//            </Link>
//         ) : (
//           <ul className="topList">
//             <li className="topListItem">
//               <Link className="link" to="/login">
//                 LOGIN
//               </Link>
//             </li>
//             <li className="topListItem">
//               <Link className="link" to="/register">
//                 REGISTER
//               </Link>
//             </li>
//           </ul>
//         )}
//         <i className="topSearchIcon fas fa-search"></i>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";

import "./search.css";

export default function Allsearch() {
 
 

 
  return (
   <div>
     <div>
     
       {/* <h1 >Search by Address</h1> */}
       <div class="p-3 mb-2 bg-primary text-white"><h1>Search by Address</h1></div>
       <li className="topListItem">
            <Link className="link" to="/search">
            <h2>Search form Rent</h2>
            </Link>
          </li>
        
          <li className="topListItem">
            <Link className="link" to="/searchhouse">
            <h2>Search from Sell House</h2>
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/searchhostel">
            <h2>Search Hostel Rent</h2>
            </Link>
          </li>
     </div>
     <div>
       {/* <h1 >Search by Address</h1> */}
       <div class="p-3 mb-2 bg-primary text-white"><h1>Search by Price Range</h1></div>
       <li className="topListItem">
            <Link className="link" to="/postrange">
            <h2>Search form Rent</h2>
            </Link>
          </li>
        
          <li className="topListItem">
            <Link className="link" to="/houserange">
            <h2>Search from Sell House</h2>
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/hostelrange">
            <h2>Search Hostel Rent</h2>
            </Link>
          </li>
     </div>
         

    </div>
  );
}