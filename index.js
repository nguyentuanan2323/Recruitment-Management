const express = require('express');
var path = require('path')
const app = express()
var morgan = require('morgan')
var expresLayout = require("express-ejs-layouts")
const port = 3000

//log Http Request
app.use(morgan('combined'))
//expres layout
app.use(expresLayout)
//Static file
app.use(express.static(path.join(__dirname,'src/public/')))
console.log('haha'+ path.join(__dirname,'src/public'))

//view Engine
app.set("view engine", "ejs");
app.set("views","./src/resource/views/")
//static file


app.get('/', (req, res) => {
    res.render("layout.ejs")
} )

app.get('/Home', (req, res) => {
    res.render("layout/home.ejs")
} )

app.get('/Test', (req, res) => {
    res.render("layout/test.ejs")
} )




app.listen(port, () => console.log("Đang lắng nghe port 3000, thanks you!"))


