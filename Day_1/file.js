const fs = require("fs");
//sync..
// fs.writeFileSync('./test.txt', 'hello everyone');

//Async..
// fs.writeFile('./test.txt', 'hello everyone async', (err) =>{});

//M-1
// const result = fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);

//M-2
// fs.readFile("./contacts.txt","utf-8", (err,result) => {
//     if(err){
//         console.log("Error", err);
//     }else{
//         console.log(result);
//     }
// });

//appendfile
// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

// fs.appendFileSync("./test.txt", `${Date.now()} Hey Hemal\n`);

//copyfile
// fs.cpSync("./test.txt", "./copy.txt");

//delete file
// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync("./test.txt")); 

//create folder
// fs.mkdirSync("my-docs");
