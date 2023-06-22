const jwt = require("jsonwebtoken")

module.exports = {
  logRequest: function (req, res, next) {
    console.log('-> Request:', req.body)
    next()
  },

  validateJwt: function (req, res, next) {
    const token = req.headers.authorization
    try {
      const tokenValue = token.split(' ')[1]

      jwt.verify(tokenValue, process.env.JWT_PRIVATE_KEY, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Sem autorização :(' })
        next()
      })
    } catch (err) {
      return res.status(401).json({ message: 'Verifique se o token esta sendo mandado certo' })
    }
  }
}