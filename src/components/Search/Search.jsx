import "./search.css";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import User from "../User/User";

function Search({ dark }) {
  const [searchedUser, setSearchedUser] = useState("");
  const [users, setUsers] = useState({
    name: "The Octocat",
    username: "octocat",
    date: "Joined 25 Jan 2011",
    bio: "This profile has no bio",
    repos: "8",
    followers: "3152",
    following: "9",
    address: "San Francisco",
  });
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSearch = () => {
    setErrorMessage(false);
    if (searchedUser === "octocat") {
      const octocatData = {
        // photo: "../../assets/octocat.png",
        name: "The Octocat",
        username: "octocat",
        date: "Joined 25 Jan 2011",
        bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
        repos: "8",
        followers: "3152",
        following: "9",
        address: "San Francisco",
      };
      setUsers(octocatData);
    } else if (searchedUser === "tamar") {
      const tamarData = {
        name: "Tamar",
        username: "tamar",
        date: "Joined 14 Oct 2015",
        bio: "This profile has no bio",
        repos: "17",
        followers: "1111",
        following: "7",
        address: "Tbilisi",
      };
      setUsers(tamarData);
    } else {
      // If the user is not "octocat" or "tamar," clear the userData
      setUsers(null);
      setErrorMessage(true);
    }
  };

  return (
    <>
      <div className={`Search ${dark ? "dark-search" : ""}`}>
        <FiSearch id="search-icon" />
        <input
          type="text"
          placeholder="Saerch GitHub username..."
          className={dark ? "placeholder" : ""}
          value={searchedUser}
          onChange={(e) => setSearchedUser(e.target.value)}
        />
        {errorMessage ? <div className="res">No results</div> : null}
        <button id="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {users ? <User dark={dark} userData={users} /> : <></>}
    </>
  );
}

export default Search;
