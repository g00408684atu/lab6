
import Movies from "./movies";  // Import the Movies component for list
import { useEffect, useState } from "react";  // Import React hooks for state and side-effects
import axios from "axios";  // Import axios for making HTTP requests


const Read = () => {// Read Component
  // State variable to hold the list of movies
  const [movies, setMovies] = useState([]);

  const Reload = () => {  // Function to reload the movie data by making an API call to fetch movies
    console.log("Reloading movie data...");
    axios.get('http://localhost:4000/api/movies')  // Make a GET request to the movies API lin 4000
        .then((response) => {
              setMovies(response.data.movies);// If successful, update the movies state with the data received from the API
        })
        .catch((error) => {  
            console.error("Error reloading data:", error); // error log to console
        });
};
  

  useEffect(() => {  // useEffect hook to run the Reload function
    Reload();  // Call Reload function to fetch movies initially
  }, []);

  return (
    <div>
      <h3>Hello from Read component!</h3>
      {/* Pass the movie data and Reload function as props to the Movies component */}
      <Movies myMovies={movies} ReloadData={Reload} />
    </div>
  );
}

export default Read;// Export the Read component
