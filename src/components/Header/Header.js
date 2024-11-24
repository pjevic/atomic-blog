/** @format */

import { useContext } from "react";
import { PostContext } from "../../App";

import Results from "../Results/Results";
import SearchPosts from "../Searchposts/SearchPosts";

export default function Header() {
  // 3. Consuming context value
  const { onClearPosts } = useContext(PostContext);

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
