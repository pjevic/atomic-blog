/** @format */

import FormAddPost from "../FormAddPost/FormAddPost";
import Posts from "../Posts/Posts";

export default function Main({ posts, onAddPost }) {
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}
