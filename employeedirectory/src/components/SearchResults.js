import React from "react";
import Card from "./Card";

function SearchResults(props) {
  return (
      console.log(props),
    <div>
      {props.results.map(result => (
          

          <Card header = {result.name.first + " " + result.name.last} detail= {
          <ul key={result.id.value}>
        
            <li key={result.gender} className="list-group-item">Gender: {result.gender}</li>
            
            <li key={result.email} className="list-group-item">Email: {result.email}</li>
            
            <li key={result.location.city} className="list-group-item">Location: {result.location.city} , {result.location.state}</li>
        
        </ul>}>
        </Card>
        
      ))}
    </div>
  );
}

export default SearchResults;