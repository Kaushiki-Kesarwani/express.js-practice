const express = require('express');
const app = express();
const port = 6000;


const birds = require('./birds');

app.use('/bird',birds);

app.listen(port,()=>{
    console.log(`app is listening at ${port}`);
})