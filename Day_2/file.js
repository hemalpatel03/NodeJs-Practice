const { log } = require("console");
const fs = require("fs");
// const os = require("os");

// console.log(os.cpus().length);

//sync..  blocking request..
// fs.writeFileSync('./test.txt', 'hello everyone');

//Async.. non-blocking request..
// fs.writeFile('./test.txt', 'hello everyone async', (err) =>{});

// console.log("1");
//blocking..
// const result = fs.readFileSync("contacts.txt", "utf-8");
// console.log(result);

//non-blocking..
// fs.readFile("contacts.txt", "utf-8", (err, result)=>{
//     console.log(result);
// });

// console.log("2");
// console.log("3");
// console.log("4");

// Default Thread Pool Size = 4
// Max? - 8core cpu - 8