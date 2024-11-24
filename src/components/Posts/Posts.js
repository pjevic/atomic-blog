/** @format */

import { useContext } from "react";
import { PostContext } from "../../App";

import List from "../List/List";

export default function Posts() {
  const { posts } = useContext(PostContext);

  return (
    <section>
      <List posts={posts} />
    </section>
  );
}
