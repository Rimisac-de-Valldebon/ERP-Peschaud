const authMiddleware = (req, res, next) => {
    // Check if user is authenticated
    if (!req.session || !req.session.user) {
        console.log('Authentication failed:', req.path);
        
        // If it's an API request, return 401
        if (req.path.startsWith('/api/')) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        
        // For regular requests, redirect to login
        return res.redirect('/');
    }
    
    // User is authenticated
    next();
};

module.exports = authMiddleware; 