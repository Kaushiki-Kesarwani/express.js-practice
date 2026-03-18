const express = require('express');
const app = express();
const port = 4000;

app.get("/",()=>{
    res.send("Hello world!");
});

app.listen(port,()=>{
    console.log(`app is listening at ${port}`);
})