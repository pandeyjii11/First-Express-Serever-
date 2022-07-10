
const { response, request } = require("express");
const express = require ("express");

const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hello, Wrold!</h1>");
});

app.get("/contact", function (req, res) {
    res.send("contact me at : nitish@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("<h1>Hello, Everyone this is nitish an aspiring SDE currently pursuing my B Tech degree from CGEC specialized CSE.</h1>");
});

app.get("/hobbie", function(req, res) {
    res.send("my hobbies are to eat sleep repeat!!!");
});

app.listen(3000, function () {
    console.log("server started on port 3000");
});

