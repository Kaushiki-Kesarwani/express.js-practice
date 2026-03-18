const express = require('express');
const app = express();
const port = 4000;

// app.get('/random.text',(req,res)=>{
//     res.send('random.text');
// });

app.get('/users/:userId/palak/:palakId', (req, res) => {
    res.send(req.params);
});

app.listen(port,()=>{
    console.log(`app is listening at ${port}`);
});