/** @format */

import { usePosts } from "../../PostContext";

import Results from "../Results/Results";
import SearchPosts from "../Searchposts/SearchPosts";

export default function Header() {
  const { onClearPosts } = usePosts();

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
