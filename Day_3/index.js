const http = require("http");
// const fs = require("fs");
// const url = require("url");
const express = require("express");

const app  = express();

//M-2 with Express install 
app.get("/", (req,res) => {
    return res.send("hello from home page");
});

app.get("/about", (req,res) => {
        return res.send(`hello ${req.query.name}`);
    // return res.send("hello from about page" +" "+ "hey" +" "+ req.query.name +" "+ "you are" +" "+ req.query.age);
});

//M-1 without Express install 
// function myHandler(req, res) {
//     if (req.url === '/favicon.ico') return res.end();
//     const log = `${Date.now()}: ${req.method} ${req.url} new req received\n`;
//     const myUrl = url.parse(req.url, true);
//     console.log(myUrl);
//     fs.appendFile('log.txt', log, (err, data) => {
//         switch (myUrl.pathname) {
//             case '/':
//                 if (req.method === 'GET') res.end("Homepage");
//                 // res.end("Homepage");
//                 break;
//             case '/about':
//                 const username = myUrl.query.myname
//                 res.end(`Hi, ${username}`);
//                 break;
//             case '/search':
//                 const search = myUrl.query.search_query;
//                 res.end("here are your result for" + search);
//             case "/signup":

//                 if (req.method === "GET") res.end("this is a signup form");
//                 else if (req.methon === "POST") {
//                     //DB query
//                     res.end("success");
//                 }
//                 default:
//                     res.end("404 not found")
//         }
//         // res.end("hello from server again");
//     });
// }

app.listen(8000, () => console.log("server started"));

// const myServer = http.createServer(app);
// myServer.listen(8000, () => console.log("server started"));