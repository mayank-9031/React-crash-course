import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";
import { useState } from "react";

const PostList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.body} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
};

export default PostList;
