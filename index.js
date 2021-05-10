const express = require('express');
const fetch = require('node-fetch');

const port = process.env.PORT || 5000;
const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const app = express();
app.use(express.json());

app.use(express.static('./public'));

app.get('/',(req,res)=>{
    res.json({
        message: "Working with dictionary API 📕"
    })
})

app.get('/:word',async(req,res)=>{
    const { word } = req.params;
    if(word){
        const resp = await fetch(URL+`${word}`);
        const data = await resp.json();

        res.json(data[0].meanings[0])
    }
})

app.listen(port,()=>{
    console.log('Listening on port: ',port)
})