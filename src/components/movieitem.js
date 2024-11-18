// Import the useEffect hook from React to handle side effects in the component
import { useEffect } from "react";
// Import the Link component from React Router for navigation between pages
import { Link } from "react-router-dom";

// Import the Card component from React Bootstrap to display movie details in a styled card
import Card from 'react-bootstrap/Card';

// Define the MovieItem component, which receives props as its parameter
const MovieItem = (props) => {
  
  // useEffect hook to log the movie details each time the 'mymovie' prop changes
  useEffect(() => {
    console.log("Movie Item:", props.mymovie);  // Log the current movie object to the console
  }, [props.mymovie]);  // This effect will run whenever the 'mymovie' prop changes

  // Render the MovieItem component
  return (
    <div>
      {/* Render a Card component to display movie information */}
      <Card>
        {/* Display the movie title in the Card header */}
        <Card.Header>{props.mymovie.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            {/* Display the movie poster image using the URL from the 'mymovie' prop */}
            <img src={props.mymovie.poster} alt={props.mymovie.title} />
            {/* Display the movie's release year in the Card footer */}
            <footer>{props.mymovie.year}</footer>
          </blockquote>
        </Card.Body>
        {/* Link to the "Edit" page for the current movie using the movie's _id */}
        {/* This will allow the user to navigate to the page where they can update the movie details */}
        <Link className="btn btn-primary" to={"/edit/" + props.mymovie._id}>Update</Link>
      </Card>
    </div>
  );
}

// Export the MovieItem component so it can be used in other parts of the application
export default MovieItem;

