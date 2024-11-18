// Import the Express framework
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define port for the server
const port = 4000;

// Import the CORS middleware to enable Cross-Origin Resource Sharing
const cors = require('cors');

// Use the CORS middleware for handling CORS requests
app.use(cors());

// Import the body-parser to parse incoming request bodies
const bodyParser = require('body-parser');

// Configure body-parser to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Configure body-parser to parse JSON data
app.use(bodyParser.json());

// Middleware to set custom headers for CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow specified HTTP methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Allow specified headers

  next(); 
});

//sends a welcome message
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying');
});

// Import Mongoose for working with MongoDB
const mongoose = require('mongoose');

// Connect to MongoDB using the provided connection string
mongoose.connect('mongodb+srv://admin:admin@cluster1.ywayv.mongodb.net/');

// Define a schema for the movie data structure
const movieSchema = new mongoose.Schema({
    title: String,
    year: String,
    poster: String
});

// Create a model for movies using the schema
const Movie = mongoose.model('MyMovies', movieSchema);

app.get('/api/movies', async (req, res) => {
    // Retrieve all movies from the database
    const movies = await Movie.find({});
    
    // Send the movies array as a JSON response with status code 200
    res.status(200).json({ movies });
});

// Define a GET endpoint to retrieve a movie by its unique ID
app.get('/api/movie/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id);

    // Send the movie data as a response
    res.send(movie);
});

// Define the route to update a movie by its ID
app.put('/api/movie/:id', async (req, res) => {
    
    // Find the movie by its ID and update it with the new data from the request body
    // The option { new: true } ensures the updated movie is returned, not the original
    let movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // Send the updated movie as the response
    res.send(movie); 
});


// Define a POST endpoint for adding new movies
app.post('/api/movies', async (req, res) => {
    console.log("Movie added: " + req.body.title); // Log the added movie's title to the console

    // Destructure title, year, and poster properties from the request body
    const { title, year, poster } = req.body;

    // Create a new movie document with the provided data
    const newMovie = new Movie({ title, year, poster });

    // Save the new movie document to the database
    await newMovie.save();

    // Send a response with a success message and the newly created movie data
    res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Log a message indicating the server is running
});