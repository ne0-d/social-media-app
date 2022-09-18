import React from "react";
import "./Profile.css";
import ProfileLeft from "./ProfileLeft/ProfileLeft";
import ProfileCard from "../ProfileCard/ProfileCard";
import PostSide from "../PostSide/PostSide";
import RightSide from "../RightSide/RightSide";
import Navbar from "../Navbar/Navbar";

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft className="ProfileLeft" />

      <div className="Profile-center">
        <Navbar />
        <ProfileCard location="profilePage" />
        <PostSide location="profilePage" />
      </div>
      <RightSide className="RightSide" />
    </div>
  );
};

export default Profile;
