const express = require('express');
const app = express();

app.get('/', function(req, res){
    return res.send('main shopping mall')
})

app.listen(3000, function(){
    console.log('server listening on port 3000');
})

app.get('/login', function(req, res){
    return res.send('login page 3')
})

app.get('/prodList', function(req, res){
    return res.send('prod list')
})

app.get('/prodDetail', function(req, res){
    return res.send('prod Detail')
})

app.get('/basketList', function(req, res){
    return res.send('basket List')
})

app.get('/mypage', function(req, res){
    return res.send('mypage')
})

app.get('/eventList', function(req, res){
    return res.send('event')
})
