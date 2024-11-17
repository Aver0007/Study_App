import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../config/database.js';

const router = express.Router();

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Register a new user
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Hash the password before storing in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    const result = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
      [username, hashedPassword]
    );

    // Return the newly created user object with a success message
    res.status(201).json({ message: 'User created', user: result.rows[0] });
  } catch (error) {
    // Handle errors (e.g., duplicate username, database connection issues)
    res.status(400).json({ error: error.message });
  }
});

// Login an existing user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Query the database for the user with the provided username
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

    // If no user found, return a 404 error
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the hashed password stored in the database
    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    // If passwords do not match, return a 400 error
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    // Generate a JWT token for the authenticated user
    const token = generateToken(user.id);

    // Return the JWT token
    res.json({ token });
  } catch (error) {
    // Handle errors (e.g., database connection issues, bcrypt compare errors)
    res.status(500).json({ error: error.message });
  }
});

export default router;
