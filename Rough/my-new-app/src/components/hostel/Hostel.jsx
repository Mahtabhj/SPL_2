import { Link } from "react-router-dom";
import "./house.css";

export default function Hostel({hostel}) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
    {hostel.photo && <img className="postImg" src={PF + hostel.photo} alt="" />}
    <br></br>
    <div className="postInfo">
      <div className="postCats">
        {hostel.categories.map((c) => (
          <span className="postCat">{c.name}</span>
        ))}
      </div>
      <Link to={`/hostel/${hostel._id}`} className="link">
        <span className="postTitle">{post.title}</span>
      </Link>
      <hr />
      <span className="postDate">
        {new Date(hostel.createdAt).toDateString()}
      </span>
    </div>
    <p className="hostelDesc">{hostel.desc}</p>
  </div>
);
}
