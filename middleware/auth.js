import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  // Bypass auth for development
  if (process.env.NODE_ENV === 'development') {
    req.user = { id: 'dev-user-id' };
    return next();
  }

  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export default auth;