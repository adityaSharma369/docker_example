const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('this is Captain Aditya Sharma Speaking')
});
app.listen(8080,()=>{
    console.log('listening');
});