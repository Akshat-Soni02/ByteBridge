const express = require('express');
const app = express();
const errrMiddleware = require('./middleware/error.js');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//CORS
app.use(cors());

app.use(express.json());
app.use(cookieParser());

//Route imports
const userRoute = require('./Routes/userRoutes.js');

app.use("/api/v1", userRoute);

//Error Middleware
app.use(errrMiddleware);

module.exports = app;