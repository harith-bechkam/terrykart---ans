var express = require('express');
var app = express();
var PORT = 5000

var indexRouter = require('./routes/index');
var db = require('./config/database');


app.use(express.json());
app.use('/api', indexRouter);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))