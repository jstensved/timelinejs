var sys = require('sys'),
    http = require('http'),
    fs = require('fs'),
	mime = require('mime');
 
http.createServer(function(request, response) {
	
	
	
	var file = '.' + request.url;
	
	console.log(file);
	
	fs.readFile(file, function (err, data) {
		
		//if (err) {
		//	throw err;
		//}
		
		//index = data;
		
		if(err)
		return null;
		
		
		var contentType = file.split('.', file)[0];
		

		
		response.writeHeader(200, {"Content-Type": mime.lookup(file)});
	
	
	
		response.write(data);
		response.end();
		
		//}
	});
		
	
   
}).listen(8000);