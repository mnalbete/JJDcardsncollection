const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
// const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const dotenv = require("dotenv");
dotenv.config();

// import routes
const userRoutes = require('./routes/user');


// app
const app = express();

// db
mongoose.connect(
    process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
}).then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});
// middleware 
app.use(morgan('dev'));
app.use(express.json());
// app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator);

// routes middleware
app.use("/api",userRoutes);

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});