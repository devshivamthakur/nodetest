// in the index.js file

const express = require('express')
const app = express()
const port = process.env.PORT ||5000;
const Gun = require('gun')

app.use(Gun.serve)


const server = app.listen(port, () => {
  console.log(`Gun server running on port ${port}🔥`)
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

Gun({ web: server })
