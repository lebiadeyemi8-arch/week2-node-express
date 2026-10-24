 express = require('express');
const dotenv = require('dotenv');
const
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming JSON
app.use(express.json());

// Custom middleware: log incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Serve static files from the public folder
app.use(express.static('public'));

// GET /
app.get('/', (req, res) => {
    res.send('My Week 2 API!');
});

// POST /user
app.post('/user', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            error: 'Name and email are required.'
        });
    }

    res.json({
        message: `Hello, ${name}!`,
        email: email
    });
});

// GET /user/:id
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ${userId} profile`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});