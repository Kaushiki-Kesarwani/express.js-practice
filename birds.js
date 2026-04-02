const express = require('express');
const router = express.Router();

const timelog = (req,res,next)=>{
   console.log(`Time: ${Date.now()} | Route: ${req.method} ${req.originalUrl}`);
    next()
}

router.use(timelog);

router.get('/',(req,res)=>{
    res.send( `Birds home page.`)
})

router.post('/about',(req,res)=>{
    res.send(`Birds about page.`)
})

module.exports = router;