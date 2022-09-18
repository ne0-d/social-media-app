import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoSearch from "../logoSearch/LogoSearch";
import "./Navbar.css";
const Navbar = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="Navbar">
      <LogoSearch />
      <span>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={`/profile/${user._id}`}
        >
          <img
            className="nav-profile-image"
            src={
              user.coverPicture
                ? serverPublic + user.profilePicture
                : serverPublic + "defaultProfile.png"
            }
          />
        </Link>
      </span>
    </div>
  );
};

export default Navbar;
