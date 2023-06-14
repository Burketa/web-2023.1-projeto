const middleware = {
  //Middleware para logar os requests
  logRequest(req, res, next) {
    console.log('-> Request:', req.body)
    next()
  }
}

module.exports = middleware