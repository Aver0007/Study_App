import express from 'express';
import jwt from 'jsonwebtoken';
import pool from '../config/database.js';

const router = express.Router();

// Middleware to authenticate JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extract token from Authorization header

  if (!token) {
    return res.sendStatus(401); // Unauthorized if token is missing
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error('JWT verification error:', err);
      return res.sendStatus(403); // Forbidden if token is invalid or expired
    }
    req.user = user; // Attach user object to request for further use
    next();
  });
};

// Create session for authenticated user
router.post('/', authenticateToken, async (req, res) => {
  const { duration } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO sessions (user_id, duration, date) VALUES ($1, $2, $3) RETURNING *',
      [req.user.userId, duration, new Date()]
    );
    res.status(201).json(result.rows[0]); // Return the created session
  } catch (error) {
    console.error('Error creating session:', error);
    res.status(400).json({ error: error.message }); // Return error message if creation fails
  }
});

// Get sessions for the authenticated user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM sessions WHERE user_id = $1', [req.user.userId]);
    res.json(result.rows); // Return sessions associated with the user
  } catch (error) {
    console.error('Error fetching sessions:', error);
    res.status(500).json({ error: error.message }); // Return error message if retrieval fails
  }
});

export default router;
