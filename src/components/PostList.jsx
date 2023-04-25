import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostList.module.css";

const PostList = () => {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Maximilian" body="React.js is awesome!" />
        <Post author="Manuel" body="check out the full course!" />
      </ul>
    </>
  );
};

export default PostList;
