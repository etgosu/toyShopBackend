const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())

app.get('/', function(req, res){
    // const resData =
    // {
    //     // `data` is the response that was provided by the server
    //     data: {},

    //     // `status` is the HTTP status code from the server response
    //     status: 200,

    //     // `statusText` is the HTTP status message from the server response
    //     statusText: 'OK',

    //     // `headers` the HTTP headers that the server responded with
    //     // All header names are lowercase and can be accessed using the bracket notation.
    //     // Example: `response.headers['content-type']`
    //     headers: {},

    //     // `config` is the config that was provided to `axios` for the request
    //     config: {},

    //     // `request` is the request that generated this response
    //     // It is the last ClientRequest instance in node.js (in redirects)
    //     // and an XMLHttpRequest instance in the browser
    //     request: {}
    // }
    
    const resData = 'Hello shop MainPage';
    
    return res.send(resData)
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
