import { IPost } from "../types/Post";

type PostProps = {
  post: IPost;
  isHighlight?: boolean;
};

const Post = ({ post, isHighlight = post.id % 10 === 0 }: PostProps) => {
  const { id, userId, title, body, userPostsCount } = post || {};

  return (
    <tr style={{ backgroundColor: isHighlight ? "lightpink" : "" }}>
      <td>{id}</td>
      <td>{userId}</td>
      <td>{title?.slice(0, 12)}</td>
      <td>{body?.slice(0, 12)}</td>
      <td>{userPostsCount}</td>
    </tr>
  );
};

export default Post;
