import { Link } from "react-router-dom";
import "./house.css";

export default function House({house}) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
    {house.photo && <img className="postImg" src={PF + house.photo} alt="" />}
    <br></br>
    <div className="postInfo">
      <div className="postCats">
        {house.categories.map((c) => (
          <span className="postCat">{c.name}</span>
        ))}
      </div>
      <Link to={`/house/${house._id}`} className="link">
        <span className="postTitle">{house.title}</span>
      </Link>
      <hr />
      <span className="postDate">
        {new Date(house.createdAt).toDateString()}
      </span>
    </div>
    <p className="houseDesc">{house.desc}</p>
  </div>
);
}
