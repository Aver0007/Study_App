import express from 'express';
import pool from '../config/database.js'; // Import your database connection
import jwt from 'jsonwebtoken';

const router = express.Router();

// Fetch study data for a user
router.get('/study-data', async (req, res) => {
  try {
    // Extract user id from JWT token
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Extract token from Authorization header

    if (!token) {
      return res.sendStatus(401); // Unauthorized if token is missing
    }

    const user = jwt.verify(token, process.env.JWT_SECRET);

    // Query database for study data associated with the user
    const result = await pool.query('SELECT date, hours FROM study WHERE user_id = $1', [user.id]);

    res.json(result.rows); // Return study data associated with the user
  } catch (error) {
    console.error('Error fetching study data:', error);
    res.status(500).json({ error: 'Server error' }); // Return error message if retrieval fails
  }
});

export default router;
