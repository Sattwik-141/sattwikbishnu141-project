import { useState } from "react";
import posts from "./data/posts.json";

import PostCard from "./components/PostCard";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" || post.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">

      <header className="blog-header">
        <h1>My React Blog</h1>
        <p>Learning Web Development</p>
      </header>

      <main className="container">

        <div className="controls">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <Filter
            category={category}
            setCategory={setCategory}
          />
        </div>

        <section className="posts">

          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
              />
            ))
          ) : (
            <p className="no-results">
              No posts found.
            </p>
          )}

        </section>

      </main>

      <footer className="blog-footer">
        <p>© 2026 Sattwik Bishnu</p>
      </footer>

    </div>
  );
}

export default App;