var express = require('express'), 
    app = express(),
    bodyParser = require('body-parser');
var i=0;
  
var urlencodedParser = bodyParser.urlencoded({ extended: false }); 
app.use(express.static(__dirname + '/public')); 
  
app.post('/add', urlencodedParser, function(req, res){ 
	console.log('a='+req.body.a)
	console.log('b='+req.body.b)
   var result = parseInt(req.body.a) + parseInt(req.body.b); 
   res.send('Result = ' + result); 
});

app.use(function (req, res, next) { 
   console.log('Time'+i+":",new Date().toISOString()); 
   i++;
   next(); 
}); 
  
app.listen(8000);
console.log('server is ready')