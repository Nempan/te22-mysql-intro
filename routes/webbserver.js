import express from "express"

const router = express.Router()

router.get("/test", (req, res) => {
    res.send("Det här är test routen från en annan fil")
});

//våra gammla skräproutes

router.get('/', (req, res) => {
  console.log(req.query)
  const name = req.query.name
  res.render('index.njk', {
      title: 'Hello world',
      message: `Hej på er te22, jag heter ${name}!`
  })
})

router.get("/watch", (req, res) => {
  const movieID = req.query.v
  console.log(movieID)
  const movies = {
    "ETTID": {
        title: "The Shawshank Redemption",
        year: 1994,
        description: "Best movie ever"
    },
    "TVÅID": {
        title: "The Godfather",
        year: 1972,
        description: "Best movie ever"
    },
  }
  const movie = movies[movieID]
  res.render('watch.njk', {
      title: 'Watch',
      movie: movie,
  })
  //  res.json(movie)
})

router.get('/ytub', (req, res) => {
  const ID = req.query.v
  console.log(ID)
  res.render('ytub.njk', {
      title: 'YouTube',
      youtubeID: ID,
  })
})
// localhost:3000/ytub?v=F9Ptmx32laY


export default router