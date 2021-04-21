const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.get('/', (req, res) =>  {
    res.send('Hello from Node')
});

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`server is running on PORT ${port}`)
});
