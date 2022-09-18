import React from "react";
import "./Home.css";
import ProfileSide from "../../components/PorfileSide/ProfileSide";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide className="ProfileSide" />
      <PostSide className="PostSide" />
      <RightSide className="RightSide" />
    </div>
  );
};

export default Home;
