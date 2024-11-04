const express = require('express'); // Import the Express framework
const app = express(); // Create an instance of an Express application
const port = 4000; // Define the port on server
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

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


// Route to get a list of movies in JSON format
app.get('/api/movies', (req, res) => {
    const movies = [ // Create an array of movie items
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.json({ whatever: movies }); // Send the movies array as JSON response
});



app.post('/api/movies',(req, res)=>{
    console.log(req.body);


})


// Start up of the server and on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Log a message indicating the server is running
});