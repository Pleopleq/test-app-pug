const express = require('express');
const pug = require('pug');

const app = express();
app.set('view engine', 'pug')


app.get('/', (req, res) =>{
    res.render('template', {
    title: 'hey', 
    message: 'Hello world!'
    })
})
 
app.listen(3000, () =>{
    console.log('Server up')
})