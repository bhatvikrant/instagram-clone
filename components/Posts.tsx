import Post from "./Post";

// TS INTERFACES
interface Props {}

const posts = [
  {
    id: "1",
    username: "johndoe",
    userImg: "https://avatars.githubusercontent.com/u/50735025?v=4",
    img: "/logo.png",
    caption: "This is a caption",
  },
  {
    id: "1",
    username: "johndoe",
    userImg: "https://avatars.githubusercontent.com/u/50735025?v=4",
    img: "/logo.png",
    caption: "This is a caption",
  },
  {
    id: "1",
    username: "johndoe",
    userImg: "https://avatars.githubusercontent.com/u/50735025?v=4",
    img: "/logo.png",
    caption: "This is a caption",
  },
  {
    id: "1",
    username: "johndoe",
    userImg: "https://avatars.githubusercontent.com/u/50735025?v=4",
    img: "/logo.png",
    caption: "This is a caption",
  },
];

const Posts: React.FC<Props> = (props) => {
  const {} = props;

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
