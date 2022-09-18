import React, { useEffect, useState } from "react";
import LogoSearch from "../logoSearch/LogoSearch";
import Navbar from "../Navbar/Navbar";
import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
import InfoCard from "../Profile/InfoCard/InfoCard";
import "./PostSide.css";

const PostSide = ({ location }) => {
  //Function to check the size of window
  const useMatchMedia = (mediaQuery, initialValue) => {
    const [isMatching, setIsMatching] = useState(initialValue);
    useEffect(() => {
      const watcher = window.matchMedia(mediaQuery);
      setIsMatching(watcher.matches);
      const listener = (matches) => {
        setIsMatching(matches.matches);
      };
      if (watcher.addEventListener) {
        watcher.addEventListener("change", listener);
      } else {
        watcher.addListener(listener);
      }
      return () => {
        if (watcher.removeEventListener) {
          return watcher.removeEventListener("change", listener);
        } else {
          return watcher.removeListener(listener);
        }
      };
    }, [mediaQuery]);

    return isMatching;
  };

  const isDesktopResolution = useMatchMedia("(max-width:900px)", true);

  return (
    <div className="PostSide">
      {location !== "profilePage" && <Navbar />}
      <PostShare />
      {location === "profilePage" && isDesktopResolution && <InfoCard />}
      <Posts />
    </div>
  );
};

export default PostSide;
