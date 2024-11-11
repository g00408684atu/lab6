// Import the useEffect hook from React
import { useEffect } from "react";

// Import the Card component from React Bootstrap to display movie details
import Card from 'react-bootstrap/Card';

// Define the MovieItem component, which receives props as its parameter
const MovieItem = (props) => {
  
  // useEffect hook to log the movie details each time the 'mymovie' prop changes
  useEffect(() => {
    console.log("Movie Item:", props.mymovie); // Log the movie item to the console
  }, [props.mymovie]); // Only run this effect when the 'mymovie' prop changes

  // Render the MovieItem component
  return (
    <div>
      <Card>
        {/* Display the movie title in the Card header */}
        <Card.Header>{props.mymovie.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            {/* Display the movie poster image */}
            <img src={props.mymovie.poster} alt={props.mymovie.Title} />
            {/* Display the movie year in the footer */}
            <footer>{props.mymovie.year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

// Export the MovieItem component to be used in other parts of the application
export default MovieItem;
