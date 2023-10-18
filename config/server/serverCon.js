const bodyparser = require('body-parser')
const routers = require('./routes')
const express = require('express')
const cors = require('cors')
const path = require('path')

const port = 3000
const app = express()
app.use(express.json());
app.use(bodyparser.json())
app.use(cors())

app.use(express.static(path.resolve(__dirname, '../..', 'public')));
console.log("path")
console.log(path)
console.log("dirname")
console.log(path.resolve(__dirname, '../..', 'public'))


// app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

routers(app)

app.listen(port, () =>{
    console.log(`server start at port ${port}`)
})

