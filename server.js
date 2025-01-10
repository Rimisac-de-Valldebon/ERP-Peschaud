require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const credentials = require('./config');
const authRoutes = require('./routes/auth');
const helmet = require('helmet');

const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' folder with absolute path
app.use(express.static(path.join(__dirname, 'public')));

// Log incoming requests
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

// Add a specific route for the root path
app.get('/', (req, res) => {
    console.log('Root path accessed');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('Login POST request received:', req.body);

    // Check credentials against config file
    const validUser = credentials.users.find(
        user => user.username === username && user.password === password
    );

    if (validUser) {
        res.redirect('/welcome.html');
    } else {
        res.redirect('/error.html');
    }
});

// Create an HTTP server bound to Express
const server = http.createServer(app);

// Start listening with the HTTP server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Static files being served from: ${path.join(__dirname, 'public')}`);
});

// Log incoming requests to the server
server.on('request', (req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);
});

app.use('/auth', authRoutes);

app.use(helmet());
