// const express = require('express')
import express from "express";

const app = express();
app.listen(3000);

app.get("/", (req, res) => {
    res.send("<h1>Hola buenas</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>about</h1>");
});

console.log("server funcionando");
