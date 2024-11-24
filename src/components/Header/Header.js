/** @format */

import Results from "../Results/Results";
import SearchPosts from "../Searchposts/SearchPosts";

export default function Header({ posts, onClearPosts, searchQuery, setSearchQuery }) {
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results posts={posts} />
        <SearchPosts searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
