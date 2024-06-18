import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import { useContext, useEffect, useState } from "react";
import WelcomeMsg from "./WelcomeMsg";

const PostList = () => {
  const { postList } = useContext(PostListContext);

  return (
    <>
      {postList.length === 0 && <WelcomeMsg />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
