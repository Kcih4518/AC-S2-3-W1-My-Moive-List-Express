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
  // create a variable to store movies
  const movieList = [
    {
      id: 1,
      title: 'Jurassic World: Fallen Kingdom',
      image:
        'https://movie-list.alphacamp.io/posters/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
    },
    {
      id: 2,
      title: 'THIS IS MOVIE TITLE',
      image:
        'https://movie-list.alphacamp.io/posters/rv1AWImgx386ULjcf62VYaW8zSt.jpg',
    },
    {
      id: 3,
      title: 'Thor: Ragnarok',
      image:
        'https://movie-list.alphacamp.io/posters/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
    },
    {
      id: 4,
      title: 'Avengers: Infinity War',
      image:
        'https://movie-list.alphacamp.io/posters/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    },
    {
      id: 5,
      title: 'Mission: Impossible - Fallout',
      image:
        'https://movie-list.alphacamp.io/posters/80PWnSTkygi3QWWmJ3hrAwqvLnO.jpg',
    },
    {
      id: 6,
      title: 'Incredibles 2',
      image:
        'https://movie-list.alphacamp.io/posters/x1txcDXkcM65gl7w20PwYSxAYah.jpg',
    },
    {
      id: 7,
      title: 'Fifty Shades Freed',
      image:
        'https://movie-list.alphacamp.io/posters/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg',
    },
    {
      id: 8,
      title: 'The First Purge',
      image:
        'https://movie-list.alphacamp.io/posters/2slvblTroiT1lY9bYLK7Amigo1k.jpg',
    },
  ]

  // past the movie data into 'index' partial template
  res.render('index', { movies: movieList })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
