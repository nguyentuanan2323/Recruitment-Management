const express = require('express'); // moudle express hổ trợ dụng nhanh trang web
var path = require('path') //
var connectDatabase = require('./database');
var connectDatabaseSql = require('./database_sql');
//get data from form
var bodyParser = require('body-parser');
const app = express() //tạp instance của module expres
var morgan = require('morgan') //module hổ trợ viêc refesh lại code khi save lại
                                //không chần chạy lại lệnh npm start thủ công
var expresLayout = require("express-ejs-layouts")
                                //module general để sử dụng reder các
                                //layout và partial layout
const port = process.env.PORT //Khai báo port sử dụng cho server nodejs
//cấu hình body parser
// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//conect Database
//Connect Database
dbConfig = require("./database");
var mongoose = require('mongoose');
// Connect to DB
mongoose.connect(dbConfig.uri);
mongoose.set('useFindAndModify', false);

//Lấy kết nối mặc định
var db = mongoose.connection;

//Ràng buộc kết nối với sự kiện lỗi (để lấy ra thông báo khi có lỗi)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//=======================================================
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
//=========================================================

// Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');
//cài đặc session của passport
app.use(expressSession(
                {secret: 'mySecretKey',
                        resave: true,
                        saveUninitialized: true}
                     ));
app.use(passport.initialize());
app.use(passport.session());





// Sử dụng middleware flash do connect-flash cung cấp để lưu trữ tin nhắn trong session
// và hiển thị trong các template
var flash = require('connect-flash');
app.use(flash());


// Initialize Passport
var initPassport = require('./src/passport_aut/passport.init');
initPassport(passport);



//test connect databaseSQL
connectDatabaseSql.authenticate()
    .then(() => {
        console.log('Connection has been established successfully. hahahahaha');
    }).catch(err => {
    console.error('Unable to connect to the database:', err);
});






//Import file index Router
//file index.router có chứa các router của các page khác trong app
const router = require('./src/routers/router.index');
const router_auth = require('./src/routers/auth.router');


router(app,passport);


app.listen(port, () => console.log("Đang lắng nghe port 3000, thanks you!"))
