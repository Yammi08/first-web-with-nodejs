const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>
{
    res.render('index.html',{title:'Principal Page'});
})

/*router.get('/',(req,res)=>
{
    res.render('');
})*/
module.exports = router;