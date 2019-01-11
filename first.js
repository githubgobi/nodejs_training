var http = require('http');
// First Module Integration - START
var dt = require('./modules/myfirstmodule');
// First Module Integration - END
// URL Module - START
var url = require('url');
// URL Module - END

// Uppercase - START

var uc = require('upper-case');
// Uppercase - END

// File Module - START
var fs = require('fs');
// File Module - END

// File Upload Module - START
var formidable = require('formidable');
// File Upload Module - END

// Email Module - START
var nodemailer = require('nodemailer');
// Email Module - END

// Mysql Module - START
var mysql = require('mysql');
// Mysql Module - END

// Lesson First - START 
/*http.createServer(function (req, res) {
	 // File Module - START
  	// fs.readFile('files/demofile1.html', function(err, data) {
  	// 	res.writeHead(200, {'Content-Type': 'text/html'});
  	// 	res.write(data);
  	// 	// res.write(err);
  	// });

  	var rs = fs.createReadStream('files/demofile1.html');
		rs.on('open', function () {
		  console.log('The file is open');
	});

  // File Module - END

  	res.writeHead(200, {'Content-Type': 'text/html'});
  	// First Module Integration - START
  	res.write(uc("The date and time are currently: " + dt.myDateTime()));
  	// First Module Integration - END
  	res.write('Hello World!');
  	res.write(req.url);
  	// URL Parsing - START
  	var q = url.parse(req.url, true).query;
  	var txt = q.name + " " + q.slug;
  	var urlData = url.parse(req.url);
  	console.log(urlData.host); //returns 'localhost:8080'
	console.log(urlData.pathname); //returns '/default.htm'
	console.log(urlData.search);
  	res.write(txt);
  	// URL Parsing - END

  	// Import Events - START
  	var events = require('events');
	var eventEmitter = new events.EventEmitter();
	// Import Events - END

	//Create an event handler:
	var myEventHandler = function () {
	  console.log('I hear a scream!');
	}

	//Assign the eventhandler to an event:
	eventEmitter.on('scream', myEventHandler);

	//Fire the 'scream' event:
	eventEmitter.emit('scream');
	// Import Events - END

  	res.end();

}).listen(8080);

*/
// Lesson First - END 

// Lesson Two - START

// File Upload & Save
	/*http.createServer(function (req, res) {
	  	if (req.url == '/fileupload') {
		    var form = new formidable.IncomingForm();
		    form.parse(req, function (err, fields, files) {
		    	var oldpath = files.filetoupload.path;
		    	var newpath = 'E:\/Dev\/Node\/files/' + files.filetoupload.name;
		    	fs.readFile(oldpath, function (err, data) {
		            if (err) throw err;
		            console.log('File read!');
		            // Write the file
		            fs.writeFile(newpath, data, function (err) {
		                if (err) throw err;
		                res.write('File uploaded and moved!');
		                res.end();
		                console.log('File written!');
		            });
		            // Delete the file
		            fs.unlink(oldpath, function (err) {
		                if (err) throw err;
		                console.log('File deleted!');
		            });
		      	});
		    });
	    } else {
		    res.writeHead(200, {'Content-Type': 'text/html'});
		    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
		    res.write('<input type="file" name="filetoupload"><br>');
		    res.write('<input type="submit">');
		    res.write('</form>');
		    return res.end();
	    }
	}).listen(8080);*/

// Lesson Two - END

// Node.js Send an Email  https://www.w3schools.com/nodejs/nodejs_email.asp



// Lesson Three - START
	
	/*var transporter = nodemailer.createTransport({
	  	service: 'gmail',
	  	auth: {
	    	user: 'youremail@gmail.com',
	    	pass: 'yourpassword'
	  	}
	});

	var mailOptions = {
	  	from: 'youremail@gmail.com',
	  	to: 'myfriend@yahoo.com',
	  	// Mulitple User - START
	  	// to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
	  	// Mulitple User - END
	  	subject: 'Sending Email using Node.js',
	  	text: 'That was easy!'
	  	// Send HTML WAY - START
	  	// html: '<h1>Welcome</h1><p>That was easy!</p>'
	  	// Send HTML Wat - END
	};

	transporter.sendMail(mailOptions, function(error, info){
	  	if (error) {
		    console.log(error);
	  	} else {
		    console.log('Email sent: ' + info.response);
	  	}
	});*/

// Lesson Three - END

// Lesson Four - START

	var con = mysql.createConnection({
	  	host: "localhost",
	  	user: "root",
	  	password: "",
	  	database: "employeereporting"
	});

	con.connect(function(err) {
	  	if (err) throw err;
	  	console.log("Connected!");
	  	var sql = "select * from users";
	  	con.query(sql, function (err, result) {
		    if (err) throw err;
		    console.log("Result: " + result[0].id);
		    console.log("Result: " + result[0].name);
		    console.log("Result: " + result[0].email);
		    console.log("Result: " + result[0].slug);
		 });
	});
// Lesson Four - END