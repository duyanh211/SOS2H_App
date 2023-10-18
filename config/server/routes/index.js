const loginRouter = require('./login')

function routes(app){
    app.use("/login", loginRouter)
}


module.exports = routes