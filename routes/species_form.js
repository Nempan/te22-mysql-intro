import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
  res.render("species_forn.njk", {
    message: "species_form"
    })
})

app.post('/species', async (req, res) => {
    const { name, latin, wingspan_min, wingspan_max } = req.body
  
    const [result] = await pool.promise().query('INSERT INTO species (name, latin, wingspan_min, wingspan_max) VALUES (?, ?, ?, ?)', [name, latin, wingspan_min, wingspan_max])
  
    res.json(result)
  })