const express = require('express')
const app = express()

app.get('/multiply/', function (req, res) {
    var id = req.query.id;
    var array = id.split(' ');
    var num1 = array[0];
    var num2 = array[1];
    var total = (+num1) * (+num2); 
  //res.send('Hello World!');
    res.send('The answer is: '+total)
})

app.listen(3002, function () {
  console.log('Multiplication service listening on port 3002!')
})
