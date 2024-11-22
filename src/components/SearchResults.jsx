import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const searchQuery = useSelector((state) => state.search.query);
  const searchResults = useSelector((state) => state.search.results);

  return (
    <div className="search-results">
      {searchQuery && (
        <div>
          <h2>Search Results for "{searchQuery}"</h2>
          {searchResults.length > 0 ? (
            searchResults.map((course) => (
              <div key={course.id} className="search-result-item">
                <img src={course.image} alt={course.title} />
                <h3>{course.title}</h3>
                <Link to={`/courses/${course.id}`}>View Course</Link>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
