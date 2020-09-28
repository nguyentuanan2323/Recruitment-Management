const express = require('express'); // moudle express hổ trợ dụng nhanh trang web
var path = require('path') //
const app = express() //tạp instance của module expres
var morgan = require('morgan') //module hổ trợ viêc refesh lại code khi save lại
                                //không chần chạy lại lệnh npm start thủ công
var expresLayout = require("express-ejs-layouts")
                                //module general để sử dụng reder các
                                //layout và partial layout
const port = 3000 //Khai báo port sử dụng cho server nodejs

//log Http Request
app.use(morgan('combined')) //thiết lập module chạy theo kiểu combined
//expres layout
app.use(expresLayout) //khai báo cho nodejs dùng expresLayout đã import phía trên
//Khai báo Static file
app.use(express.static(path.join(__dirname,'src/public/')))
console.log('Well'+ path.join(__dirname,'src/public'))
//Khai báo view Engine, Thư mục chứa views
app.set("view engine", "ejs");
app.set("views","./src/resource/views/")

//Import file index Router
//file index.router có chứa các router của các page khác trong app
const router = require('./src/routers/router.index');

router(app);

app.listen(port, () => console.log("Đang lắng nghe port 3000, thanks you!"))
