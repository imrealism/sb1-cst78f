import User from '../models/User.js';

const admin = async function(req, res, next) {
  try {
    const user = await User.findById(req.user.id);
    if (user.role !== 'admin') {
      return res.status(403).json({ msg: 'Access denied. Admin only.' });
    }
    next();
  } catch (err) {
    res.status(500).send('Server error');
  }
};

export default admin;