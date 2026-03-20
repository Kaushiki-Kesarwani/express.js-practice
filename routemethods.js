const express = require('express');
const path = require('path');
const port = 4000;
const app = express();


//res.send()
app.get('/hello',(req,res)=>{
    res.send("Hello world!");
});

//res.json()
app.get('/user',(req,res)=>{
    res.json({
    name:"kaushiki",
    age:18,
    course:"BCA"
    });
});


//res.sendStatus()
app.get('/error',(req,res)=>{
    res.sendStatus(404);
});

//res.redirect()
app.get('/home',(req,res)=>{
    res.send("Welcome home");
});

app.get('/go',(req,res)=>{
    res.redirect('/home')
});

//res.sendFile()
app.get('/page',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
});

//res.download()
app.get('/download',(req,res)=>{
    res.download(path.join(__dirname,'download.txt'))
});


//res.end()
app.get('/end',(req,res)=>{
    res.send("Done");
})

//Dynamic API
app.get('/student/:id',(req,res)=>{
    if(req.params.id == 1){
        res.json({
            name:"kaushiki",
            age:20
        });
    }else if(req.params.id == 2){
        res.sendFile(path.join(__dirname,'index.html'))
    }
    else{
        res.sendStatus(404);
    }
});

app.listen(4000,()=>{
    console.log(`app is listening at ${port}`);
})