import jwt from 'jsonwebtoken'

export const AuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]

  if (!token) return res.status(403).json('NONE AUTH')

  try {
    req.user = jwt.verify(token, process.env.SECRET)
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(403).json({ message: 'Expired Token' })
    }
  }

  next()
}
