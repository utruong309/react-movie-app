import React from 'react'

// destructuring 

const Search = ({ searchTerm, setSearchTerm }) => {
  // the onChange function will update the searchTerm each time 
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />

        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Search