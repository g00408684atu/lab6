import axios from "axios"; // Import Axios for making HTTP requests
import { useState } from "react"; // Import useState for managing component state

const Create = () => {
    // State variables to hold movie details
    const [title, setTitle] = useState(''); // State for movie title
    const [year, setYear] = useState('');   // State for release year
    const [poster, setPoster] = useState(''); // State for poster URL

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Create a movie object with the current state values
        const movie = { title, year, poster };

        // Make a POST request to the server to add the new movie
        axios.post('http://localhost:4000/api/movies', movie)
            .then(response => {
                // Handle successful response 
                console.log('Movie added:', response.data);
            })
            .catch(error => {
                // Handle errors
                console.error('There was an error adding the movie!', error);
            });

        // Log the movie object to the console (optional)
        console.log(movie);
    }

    return (
        <div>
            <h3>Hello from create component!</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Movie Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Year: </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => { setYear(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Poster: </label>
                    <input type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e) => { setPoster(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Movie"></input>
                </div>
            </form>
        </div>
    );
}
export default Create;