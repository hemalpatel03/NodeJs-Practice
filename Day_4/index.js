const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

//middleware - plugin
app.use(express.urlencoded({extended:false}));

app.use((req,res, next)=>{
    fs.appendFile("log.txt",`${Date.now()}: ${req.ip}: ${req.method}: ${req.path}`, (err, data)=>{
        next();
    });
    // console.log("hello from middleware 1");
    // req.myusername = "hemal.patel"
    // return res.json({mgs: "hello from middleware 1"});
    // next();
});

// app.use((req,res, next)=>{
//     console.log("hello from middleware 2");
//     // db query
//     // credit card info
//     // req.creditCardNumber = "123";
//     return res.json({mgs: "hello from middleware 1"});
//     return res.end("hey");
//     next();
// });

//Routes
app.get("/api/users", (req,res)=>{
    // console.log("i am in get route", req.myusername);.
    res.setHeader("X-MyName", "Hemal Patel"); //Cumtom header
    // always add X to custom header
    // console.log(req.headers);
    return res.json(users);
});

// app.get("/api/users/:id",(req, res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// });

//REST API
app.get("/users",(req, res)=>{
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})

app.post("/api/users", (req,res)=>{
    //TODO: Create new user
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA.JSON', JSON.stringify(users), (err,dataa)=>{
        return res.status(201).json({ status: "success", id: users.length});
    });
});

// app.patch("/api/users/:id", (req,res)=>{
//     //TODO: Edit the user with id
//     return res.json({ status: "pending" });
// });

// app.delete("/api/users/:id", (req,res)=>{
//     //TODO: Delete the user with id
//     return res.json({ status: "pending" });
// });

app
    .route("/api/users/:id")
    .get((req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
    })
    .patch((req, res)=>{
        //Edit user with id
        return res.json({status: "panding"});
        })
        .delete((req, res)=>{
        //delete user with id
        return res.json({status: "panding"});
        });

app.listen(PORT, ()=>console.log('server started at p'));
