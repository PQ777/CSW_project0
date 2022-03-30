const express = require('express')
const app = express();

app.use(express.static('image'));
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/html/test.html');
});

app.get('/about',(req, res)=>{
    res.send("about");
});

app.listen(8000,function(){
    console.log('start at 8000');
}); 