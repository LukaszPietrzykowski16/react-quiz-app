const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.json({message: 'Hello from server'})
})

app.get("/api", (req, res) => {
    res.json({message: 'Hello from server'})
})

app.get("/add", (req, res) => {
    res.json({message: 'Hello from server'})
})


/*
app.get('/', (req, res) => {

})
*/
app.listen(3000, () => {
    console.log('server is running on port 3000')
})