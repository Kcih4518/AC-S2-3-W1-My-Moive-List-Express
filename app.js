// Include express from node_modules
const express = require('express')
const app = express()

// Define server related variables
const port = 3000

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
  // create a variable to store movieOne
  const movieOne = {
    id: 1,
    title: 'Jurassic World: Fallen Kingdom',
    image:
      'https://movie-list.alphacamp.io/posters/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
  }
  res.render('index', { movie: movieOne })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
