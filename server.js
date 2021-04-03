const express = require("express")
const app = express()
const gi = require(`.gitignore`);
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
).then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
})
    


app.get('/', (req, res) => {
    res.send("hello from node")
}); 

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});