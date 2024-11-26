import { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Gladiator II", release_date: "2024" },
    { id: 2, title: "John Wick", release_date: "2022" },
    { id: 3, title: "The Matrix", release_date: "1999" },
    { id: 4, title: "Star Wars", release_date: "1977" },
    { id: 5, title: "The Lord of the Rings", release_date: "2001" },
    { id: 6, title: "Inception", release_date: "2010" },
    { id: 7, title: "The Dark Knight", release_date: "2008" },
    { id: 8, title: "The Avengers", release_date: "2012" },
    { id: 9, title: "Interstellar", release_date: "2014" },
    { id: 10, title: "The Matrix Resurrections", release_date: "2021" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = searchQuery;
    console.log(searchTerm);
    alert(searchTerm);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
              <MovieCard key={movie.id} movie={movie} />
            )
        )}
      </div>
    </div>
  );
};

export default Home;
