require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const credentials = require('./config');
const session = require('express-session');
const connectDB = require('./config/db');
const tableRoutes = require('./routes/api/tables');

const app = express();
const PORT = 3000;

// Session middleware
app.use(session({
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve public CSS files without authentication
app.use('/css', express.static(path.join(__dirname, 'public/css')));

// Authentication middleware
const checkAuth = (req, res, next) => {
    // List of paths that don't require authentication
    const publicPaths = ['/', '/index.html', '/login', '/logout', '/error.html'];
    
    // Allow public paths
    if (publicPaths.some(path => req.path === path)) {
        return next();
    }

    // Check if user is authenticated
    if (!req.session.user) {
        console.log('Unauthorized access attempt:', req.path);
        return res.redirect('/');
    }

    next();
};

// Root route handler
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    const validUser = credentials.users.find(
        user => user.username === username && password === password
    );

    if (validUser) {
        req.session.user = {
            username: validUser.username
        };
        res.redirect('/home.html');
    } else {
        res.redirect('/error.html');
    }
});

// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
        }
        res.redirect('/');
    });
});

// Apply authentication check for all other routes
app.use(checkAuth);

// Serve static files after authentication check
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
connectDB();

// Add API routes
app.use('/api/tables', tableRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
