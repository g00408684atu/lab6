import MovieItem from "./movieitem"; // Import the MovieItem component from the current directory

function Movies(props) {// Define the Movies component which takes props as an argument
    return (
        <>
            {/* Loop through the 'myMovies' array passed as a prop and render a MovieItem component for each movie */}
            {props.myMovies.map((movie) => (
                <MovieItem
                    mymovie={movie} // Pass the current movie to the MovieItem component as a prop
                    key={movie._id} // Unique key for each MovieItem to ensure React can efficiently update
                    Reload={props.ReloadData} // Pass the ReloadData function prop to handle data reloading
                />
            ))}
        </>
    );
}

export default Movies;// Export the Movies component
