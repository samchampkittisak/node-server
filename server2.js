var express = require('express'); 
var app = express();
var i = 0; 

app.use(express.static('public'));

app.use('/user/:id', function (req, res, next) { 
   console.log('Request Type:', req.method); 
   next(); 
});

app.use(function (req, res, next) { 
   console.log('Time'+i+":",new Date().toISOString()); 
   i++;
   next(); 
}); 

app.get('/', function(req, res){ 
   res.send('Hello120342314') 
}); 
app.listen(8000);

