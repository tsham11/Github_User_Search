import "./user.css";
import cat from "../../assets/octocat.png";
import { FaTwitter } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { ImLink } from "react-icons/im";
import { BsBuildingsFill } from "react-icons/bs";

function User({ dark, userData }) {
  return (
    <div className={`User ${dark ? "dark-user" : ""}`}>
      <img src={cat} alt="photo" className="user-img" />
      <div className="content">
        <div className="hdd">
          <img src={cat} alt="photo" className="user-img-1" />
          <div className="hd">
            <div className="name">
              <h1 className={dark ? "h1-dark" : ""}>{userData.name}</h1>
              <h3>@{userData.username}</h3>
            </div>
            <h4 className={dark ? "h4-dark" : ""}>{userData.date}</h4>
          </div>
        </div>

        <p className={dark ? "p-dark" : ""}>{userData.bio}</p>

        <div className={`table ${dark ? "dark-table" : ""}`}>
          <div>
            <p className={`table-h ${dark ? "dark-table-h" : ""}`}>Repos</p>
            <p className={`table-n ${dark ? "dark-table-n" : ""}`}>
              {userData.repos}
            </p>
          </div>
          <div>
            <p className={`table-h ${dark ? "dark-table-h" : ""}`}>Followers</p>
            <p className={`table-n ${dark ? "dark-table-n" : ""}`}>
              {userData.followers}
            </p>
          </div>
          <div>
            <p className={`table-h ${dark ? "dark-table-h" : ""}`}>Following</p>
            <p className={`table-n ${dark ? "dark-table-n" : ""}`}>
              {userData.following}
            </p>
          </div>
        </div>

        <div className="footer">
          <ul>
            <div className="first">
              <li>
                <TiLocation className={`icon ${dark ? "dark-icon" : ""}`} />
                <a href="/" className={dark ? "dark-a" : ""}>
                  {userData.address}
                </a>
              </li>
              <li>
                <ImLink className={`icon ${dark ? "dark-icon" : ""}`} />
                <a href="/" className={dark ? "dark-a" : ""}>
                  https://github.blog
                </a>
              </li>
            </div>

            <div className="sec">
              <li>
                <FaTwitter className={`icon ${dark ? "dark-icon" : ""}`} />
                <a href="/" className={dark ? "dark-a" : ""}>
                  Twitter
                </a>
              </li>
              <li>
                <BsBuildingsFill
                  className={`icon ${dark ? "dark-icon" : ""}`}
                />
                <a href="/" className={dark ? "dark-a" : ""}>
                  @github
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default User;
