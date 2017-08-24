var express= require('express');
var app= express();
var path= require('path');


app.use(express.static(path.join(__dirname,'materialize')));
// 将网站所有文件放入该文件夹，该js文件与文件夹同一目录


app.get('/index.html',function(req,res){
  // res.send('hello wednesday');
  var path_one=path.resolve(__dirname, '..');
  // console.log(path_one);
  // res.sendFile(path_one+'/'+'index.html');
  res.sendFile(__dirname+'/'+'index.html');
})

var server= app.listen(8080,function(){
  var host= server.address().address
  var port= server.address().port

  console.log('应用实例，访问地址http://%s:%s',host,port)
})

