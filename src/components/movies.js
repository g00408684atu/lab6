// Import the MovieItem component, which displays individual movie details
import MovieItem from "./movieitem";

// Define the Movies component, which receives a list of movies through props
const Movies = (props) => {
  
  // Map over the array of movies passed in through props.myMovies
  return props.myMovies.map((movie) => {
    
    // For each movie, render a MovieItem component
    // Pass the movie object as the 'mymovie' prop and use the movie's '_id' as the unique key
    return <MovieItem mymovie={movie} key={movie._id} />;
  });
}

// Export the Movies component so it can be used in other parts of the application
export default Movies;
