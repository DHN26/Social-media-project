import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postTagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const postTags = postTagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    postTagsElement.current.value = "";

    addPost(userId, postTitle, postBody, postTags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          <b>User Id</b>
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control "
          id="userId"
          placeholder="Enter your Id here"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          <b>Post title</b>
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control "
          id="title"
          placeholder="How are you feeling today...?"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          <b>Post content</b>
        </label>
        <textarea
          rows={2}
          type="text"
          ref={postBodyElement}
          className="form-control "
          id="body"
          placeholder="Tell us more about it!"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          <b>Enter your hashtags here</b>
        </label>
        <input
          type="text"
          ref={postTagsElement}
          className="form-control "
          id="tags"
          placeholder="Eg: #cool, #funday"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary submit-btn"
        onClick={() =>
          alert("Your post is added! Check out Home to view Posts")
        }
      >
        Post
      </button>
    </form>
  );
};

export default CreatePost;
