const express = require('express');
const app = express();
const port = 7000;

const user = (req,res,next)=>{
console.log("Hey i am user.");
next();
}
app.use(user);

const routemiddleware = (req,res,next)=>{
    req.requestTime = Date.now();
    next();
}
app.use(routemiddleware);


app.use('/user/:id',(req,res,next)=>{
    console.log("Middleware triggered");
    console.log("request type : ",req.method);
    console.log("user Id : ",req.params.id);
    console.log("URL : ",req.originalUrl);
    next();
})


app.get('/user/:id',(req,res,next)=>{
    console.log('URL of middleware2 : ',req.originalUrl);
    next();
})


app.get('/',(req,res)=>{
    res.send("Hey! I am get request.")
});


app.post('/post',(req,res)=>{
    console.log(`Time : ${req.requestTime}`)
    res.send("Hey! I am post request.")
    
})

app.listen(port,()=>{
console.log(`App is running at port ${port}`);
})