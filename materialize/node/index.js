var express= require('express');
var app= express();
var path= require('path');

app.use(express.static('public'));

app.get('',function(req,res){
  // res.send('hello wednesday');
  var path_one=path.resolve(__dirname, '..');
  // console.log(path_one);
  res.sendFile(path_one+'/'+'index.html');
  // res.sendFile(__dirname+'/'+'index.html');
})

var server= app.listen(8090,function(){
  var host= server.address().address
  var port= server.address().port

  console.log('应用实例，访问地址http://%s:%s',host,port)
})

