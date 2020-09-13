const express = require('express');
const app = express()
const port = 3000

app.get('/newss', (req, res) => {return res.send("Dựng server thành công")} )


app.listen(port, () => console.log("Đang lắng nghe port 3000, thanks you!"))


