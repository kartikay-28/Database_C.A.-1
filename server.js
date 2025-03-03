const express = require('express');

const app = express();

const PORT = 3000;

app.get('/',(req,res)=>{
    res.send("This is my express server")
})

app.listen(PORT,(req,res)=>{
    console.log(`Hi my name is Kartikay Rattan and the server is running on http://localhost:${PORT}`)
})