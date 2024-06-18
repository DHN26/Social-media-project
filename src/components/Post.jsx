import { RiDeleteBin7Fill } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  return (
    <div className="card post-card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>

        <p className="card-text">{post.body}</p>

        {post.tags.map((tag) => (
          <span key={tag} class="badge text-bg-secondary hashtag">
            {tag}
          </span>
        ))}

        <h3>
          <span
            key={post.id}
            class="badge text-bg-secondary delete"
            onClick={() => {
              deletePost(post.id);
            }}
          >
            Delete post <RiDeleteBin7Fill />
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Post;
