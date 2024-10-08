import express from 'express';

const router = express.Router();

// Send contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    // Here you would typically save the message to a database
    // and/or send an email notification
    console.log('Contact form submission:', { name, email, message });
    res.json({ msg: 'Message sent successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;