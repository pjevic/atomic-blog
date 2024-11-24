/** @format */
import List from "../List/List";

export default function Posts({ posts }) {
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}
