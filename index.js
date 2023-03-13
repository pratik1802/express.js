const express = require('express');
// const http = require('http')
const add  = express()
const port=process.env.PORT||3000

    
    add.get('/', (req,res) => {
       res.send('home page')
    })

    add.get('/about', (req,res) => {
       res.send('about page')
    })

    add.get('/service', (req,res) => {
       res.send('serviceS page')
    })
    add.get('/contact', (req,res) => {
       res.send('contact page')
    })

    // add.get('/', (req,res) => {
    //    res.send('home page')
    // })
//



add.listen(port, () => {
    console.log(`server is started  127.0.0.1:${port}`);
})





