// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv';
// import userRoutes from './routes/users.js'; // Import user routes
// import sessionRoutes from './routes/sessions.js'; // Import session routes
// import studyRoutes from './routes/study.js'; // Import study routes

// // import pool from './config/database.js'; // Assuming your database configuration

// dotenv.config();
// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// // Routes
// app.use('/users', userRoutes);
// app.use('/sessions', sessionRoutes);
// app.use('/study', studyRoutes); // Include study routes

// // Error handling middleware (should be defined last)
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from 'express';
import cors from 'cors';
import pg from 'pg';

const app= express();
app.use(cors());
app.use(express.json());

const db= new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "login",
    password: "Ayushi@2002",
    port: 5432
})


db.connect();

//register

app.post('/register', async(req, res)=>
{
    const {username, password}= req.body;
    try{
        const result= await db.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id', [username, password]);
        res.json({userId: result.rows[0].id});
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
})

//login

app.post('/login', async(req, res)=>
{
    const {username, password} =req.body;
    try {
        const result = await db.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
        if (result.rows.length > 0) {
          res.json({ message: 'Login successful' });
        } else {
          res.status(401).json({ error: 'Invalid credentials' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})

app.listen(3000, ()=>
    {
        console.log("server is running on port 3000");
    }
)

