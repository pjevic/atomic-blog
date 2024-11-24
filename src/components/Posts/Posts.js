/** @format */

import { usePosts } from "../../PostContext";

import List from "../List/List";

export default function Posts() {
  const { posts } = usePosts();

  return (
    <section>
      <List posts={posts} />
    </section>
  );
}
