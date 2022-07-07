const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({message: 'Hello from server'})
})


/*
app.get('/', (req, res) => {

})
*/
app.listen(3001, () => {
    console.log('server is running on port 3001')
})