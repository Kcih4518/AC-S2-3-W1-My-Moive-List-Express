// Include express from node_modules
const express = require('express')
const app = express()

// Define server related variables
const port = 3000

// require movies json file
const movieList = require('./movies.json')

// require express-handlebars here
const exphdbs = require('express-handlebars')

// setting template engine
// Param 1 : The name of the template engine
// Param 2 : Default layout file name 'main'
app.engine('handlebars', exphdbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// Handle request and response here
app.get('/', (req, res) => {
  // past the movie data into 'index' partial template
  res.render('index', { movies: movieList.results })
})

app.get('/movies/:movie_id', (req, res) => {
  const movie = movieList.results.find(
    (movie) => movie.id.toString() === req.params.movie_id
  )
  res.render('show', { movie: movie })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
