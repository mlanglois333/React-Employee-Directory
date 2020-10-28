import React from "react";

function SearchResults(props) {
    console.log(props.results);
    const info = "";
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
          console.log(result),
        <li key={result.name.first} className="list-group-item">
            <p>Name: {result.name.first}  {result.name.last}</p>
            <br></br>
            <p>Gender: {result.gender}</p>
            <br></br>
            <p>Email: {result.email}</p>
            <br></br>
            <p>Location: {result.location.city}</p>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;