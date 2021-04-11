import styles from "../../styles/Blog.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  return {
    props: {
      posts: data,
    },
  };
};

const BlogPosts = ({ posts }) => {
  return (
    <div>
      <h1>All BlogPosts</h1>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <a className={styles.single}>
            <h3>{post.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default BlogPosts;
