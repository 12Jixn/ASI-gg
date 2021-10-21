const express = require('express');
const bodyParser = require('body-parser');

// set up express app
const app = express();

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/Api', require('./routes/Api'));

// listen for requests
app.listen(process.env.port || 4000, function(){    
    console.log('Listening for requests');
});
