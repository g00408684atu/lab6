// Import necessary dependencies and libraries
import React from 'react';                // React library
import { useParams } from 'react-router-dom';  // For extracting URL parameters (movie ID)
import { useState, useEffect } from 'react';   // For managing state and side effects
import axios from 'axios';                 // For making HTTP requests
import { useNavigate } from "react-router-dom";  // For programmatic navigation

// Define the Edit component
export default function Edit(props) {
  
  // Use the 'id' parameter from the URL, which is used to fetch and update the movie
  let { id } = useParams();

  // Define state variables for title, year, and poster URL of the movie
  const [title, setTitle] = useState("");  // State for movie title
  const [year, setYear] = useState("");    // State for movie year
  const [poster, setPoster] = useState("");  // State for movie poster URL

  // useNavigate hook to navigate programmatically after the form is submitted
  const navigate = useNavigate();

  // useEffect hook to fetch movie data when the component mounts or when 'id' changes
  useEffect(() => {
    // Make a GET request to fetch movie data based on the 'id' parameter from the URL
    axios.get('http://localhost:4000/api/movie/' + id)
      .then((response) => {
        // If the request is successful, populate state with the movie data
        setTitle(response.data.title);
        setYear(response.data.year);
        setPoster(response.data.poster);
      })
      .catch((error) => {
        // Log any errors that occur during the request
        console.log(error);
      });
  }, [id]);  // Dependency array: re-run this effect when the 'id' changes

  // Handle form submission to update the movie
  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent the default form submission behavior

    // Create an object with the updated movie data
    const newMovie = { id, title, year, poster };

    // Send a PUT request to update the movie using the 'id' and updated data
    axios.put('http://localhost:4000/api/movie/' + id, newMovie)
      .then((res) => {
        // Log the response from the server (updated movie data)
        console.log(res.data);
        
        // Redirect to the '/read' page (movie list) after successfully updating the movie
        navigate('/read');
      });
  }

  return (
    <div>
      {/* Render the form for editing movie details */}
      <form onSubmit={handleSubmit}>
        {/* Input field for movie title */}
        <div className="form-group">
          <label>Movie Title: </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}  // Update title state when input changes
          />
        </div>

        {/* Input field for release year */}
        <div className="form-group">
          <label>Release Year: </label>
          <input
            type="text"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}  // Update year state when input changes
          />
        </div>

        {/* Input field for poster URL */}
        <div className="form-group">
          <label>Poster URL: </label>
          <input
            type="text"
            className="form-control"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}  // Update poster state when input changes
          />
        </div>

        {/* Submit button to send the updated movie data */}
        <div className="form-group">
          <input type="submit" value="Edit Movie" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
