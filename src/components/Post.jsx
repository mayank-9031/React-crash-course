import classesss from "./Post.module.css";

function Post(props) {
  return (
    <li className={classesss.post}>
      <p className={classesss.author}>{props.author}</p>
      <p className={classesss.text}>{props.body}</p>
    </li>
  );
}

export default Post;
