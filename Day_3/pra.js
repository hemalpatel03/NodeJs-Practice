// var buffer = new Buffer(50);
// buffer.write("good morning");
// console.log(buffer.toString('utf8'));

//+--++-++-+-+-+-+-++-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+++-+-+-+-+-+

//Streams

//write operation
// var fs = require("fs");
// var str ="this line is written to my file";
// var ws = fs.createWriteStream('log.txt');
// ws.write(str,'utf8');
// ws.end();
// console.log("the data is written to the file...");

// ws.on('error',function(err){
//   console.log(err.stack);
// });


//read operation
// var fs = require("fs");
// var str = "";

// var rs = fs.createReadStream('log.txt');
// rs.setEncoding("utf8");

// //handling stream event 'data' 
// rs.on('data', function(chunk){ str += chunk; });

// //handling stream event 'end' 
// rs.on('end',function(){ console.log(str) });

// //handling stream event 'error' 
// rs.on('error', function(err){ console.log(err.stack); });

//pipe operation
// var fs = require("fs");
// var rs = fs.createReadStream('log.txt');
// rs.setEncoding("utf8");
// var ws = fs.createWriteStream('output.txt');
// rs.setEncoding("utf8");
// rs.pipe(ws);
// console.log("data is transferes from 'log.txt' to 'output.txt");

//-+-+--+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

//File System
// 1) Read Operation

// var fs = require("fs");
// fs.readFile("log.txt", function(err,data) {
//   if (err)
//     console.log(err);
//     console.log(data.toString());
// });

//Ex.2
// var fs = require("fs");
// var data = fs.readFileSync('log.txt');
// console.log(data.toString());

// 2) Create File Operation

// var fs = require("fs");
// fs.open('myfile.txt', 'w', function (err, file) {
//   if (err)
//     console.log(err);
//   console.log("file created!");
// })

// 3) Update/write File Operation
//two operation 1) appenFile()  2) WriteFile()

// 3.1) appenFile()
// var fs = require("fs");
// str = "this line is written to the file";
// fs.appendFile('myfile.txt', str, function (err) {
//     if (err)
//         console.log(err);
//     console.log('File Appended!!');
// });

// 3.2) WriteFile()
// var fs = require("fs");
// str = "this line is replacing the previous contents";
// fs.writeFile('myfile.txt', str, function (err) {
//     if (err)
//         console.log(err);
//     console.log('File Writing Done!!');
// });


// 4) Delete File Operation
// we use unlink() method. syntax: unlink(path,callback)

// var fs = require("fs");
// fs.unlink('myfile.txt', function (err){
//     if(err)
//     throw err;
//     console.log("file is deleted!!!");
// });

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+--+-++-+-+-+-