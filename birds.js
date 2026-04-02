const express = require('express');
const router = express.Router();

const timelog = (req,res,next)=>{
    console.log(`Time : ${Date.now()}`)
    next()
}

router.use(timelog);

router.get('/',(re,res)=>{
    res.send( `Birds home page.`)
})

router.post('/about',(req,res)=>{
    res.send(`Birds about page.`)
})

module.exports = router;