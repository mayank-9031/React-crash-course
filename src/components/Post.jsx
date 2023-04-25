import classesss from "./Post.module.css";

function Post(props) {
  return (
    <div className={classesss.post}>
      <p className={classesss.author}>{props.author}</p>
      <p className={classesss.text}>{props.body}</p>
    </div>
  );
}

export default Post;
