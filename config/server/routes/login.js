const express = require('express')
const route = express.Router()

route.post('/users', (req, res) =>{
    var sql = "select * from nguoidung";
    db.query(sql, (err, kq) => {
        if(err) throw err;
        console.log(kq)
        res.send(kq)
    })
})



module.exports = route