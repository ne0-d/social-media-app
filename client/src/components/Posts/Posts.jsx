import React from "react";
// import { PostsData } from "../PostsData";
import "./Posts.css";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTimelinePosts } from "../../actions/PostAction";
import { useParams } from "react-router-dom";

const Posts = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  if (!posts) return "No posts!";
  if (params.id) posts = posts.filter((post) => post.userId === params.id);

  return (
    <div className="Posts">
      {loading
        ? "Gathering the stuff..."
        : posts.map((post, id) => {
            console.log(posts);
            return <Post data={post} key={id} />;
          })}
    </div>
  );
};

export default Posts;
