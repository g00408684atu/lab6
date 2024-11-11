const express = require('express'); // Import the Express framework
const app = express(); // Create an instance of an Express application
const port = 4000; // Define the port on server

const cors = require('cors');
// Use the CORS middleware
app.use(cors());
// Import the body-parser middleware to parse incoming request bodies
const bodyParser = require('body-parser');
// Use body-parser to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Middleware to set custom headers for CORS
app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});
// Route for the root URL that sends a message
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying');
});

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster1.ywayv.mongodb.net/');

const movieSchema = new mongoose.Schema({
    title: String,
    year: String,
    poster: String
  });
 
  const Movie = mongoose.model('MyMovies', movieSchema);
// Route to get a list of movies in JSON format
//app.get('/api/movies', (req, res) => {
   // const movies = [ // Create an array of movie items
        //{
            // "Title": "Avengers: Infinity War",
            // "Year": "2018",
            // "imdbID": "tt4154756",
            // "Type": "movie",
            // "Poster": "https://example.com/poster1.jpg"
       // },
      //  {
      //      "Title": "Captain America: Civil War",
      //      "Year": "2016",
      //      "imdbID": "tt3498820",
       //     "Type": "movie",
       //     "Poster": "https://example.com/poster2.jpg"
      //  },
      //  {
      //      "Title": "World War Z",
      //      "Year": "2013",
      //      "imdbID": "tt0816711",
     //       "Type": "movie",
     //       "Poster": "https://example.com/poster3.jpg"
    //    }
   // ];
  //  res.json({ whatever: movies }); // Send the movies array as JSON response
//});

app.get('/api/movies', async (req,res)=> {

    const movies = await Movie.find({});
    res.status(200).json({movies})
})

app.get('/api/movie/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.send(movie);
  });
// Define a POST endpoint for adding new movies
app.post('/api/movies',async (req,res)=>{
    console.log("Movie added: "+req.body.title);

    const{title,year,poster} = req.body;

    const newMovie = new Movie ({title,year,poster});
    await newMovie.save();

    res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
})

// Start up of the server and on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Log a message indicating the server is running
});