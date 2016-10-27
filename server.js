var http=require("http");
var server=http.createServer(function(req,res){
	res.writeHead(200,{"Context_Type":"text/plain"});
	res.end("hello");
})
server.listen(1234,function(){
	console.log("server listening at port 1234");
});