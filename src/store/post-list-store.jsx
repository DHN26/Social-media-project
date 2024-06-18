import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},

  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, postTags) => {
    console.log(`${postTags}`);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        userId: userId,
        tags: postTags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

/*THIS WAS REQUIRED EARLIER TO HAVE 2 POSTS*/
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Bangalore",
    body: "Gonna attend a frined ka wedding. Excited for her!",
    userId: "user-1",
    tags: ["wedding", "bangalore"],
  },
  {
    id: "2",
    title: "Completed JS certification",
    body: "Finally completed JS course from KG coding. Hope to complete React course soonnnnn.",

    userId: "user-3",
    tags: ["course", "JS", "achievementUnlocked"],
  },
];

export default PostListProvider;
