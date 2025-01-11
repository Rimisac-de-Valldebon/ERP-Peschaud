# ERP-Peschaud

A web-based Enterprise Resource Planning system built with Express.js and modern web technologies.

## Tech Stack

- **Backend**: Node.js with Express.js
- **Frontend**: HTML5, CSS3, JavaScript
- **Authentication**: Express-session
- **Data Visualization**: Chart.js
- **Microsoft Integration**: Microsoft Graph API
- **Excel Processing**: ExcelJS

## Project Structure

ERP-Peschaud/
├── public/
│   ├── css/
│   │   ├── auth.css      # Authentication-related styles
│   │   ├── layout.css    # Layout and structure styles
│   │   └── style.css     # Global styles
│   ├── dashboard.html    # Main dashboard interface
│   ├── home.html        # Home page with interactive graph
│   ├── index.html       # Login page
│   └── welcome.html     # Post-login welcome page
├── routes/
│   ├── auth.js         # Authentication routes
│   └── onedrive.js     # Microsoft OneDrive integration
├── config.js           # Application configuration
├── server.js           # Main application entry point
└── .env               # Environment variables

## Features

1. **Authentication System**
   - Session-based authentication
   - Role-based access control
   - Secure cookie handling

2. **Interactive Dashboard**
   - Dynamic graph visualization using Chart.js
   - Customizable data parameters
   - Responsive layout

3. **Microsoft Integration**
   - OneDrive file access
   - Excel file processing
   - Microsoft Graph API integration

4. **Security Features**
   - Session management
   - Protected routes
   - Environment variable configuration
   - CORS protection

## Setup and Installation

1. Clone the repository
2. Install dependencies:
```bash:ERP-Peschaud/README.md
npm install
```
3. Configure environment variables in `.env`:
```
MICROSOFT_CLIENT_ID=your_client_id
MICROSOFT_CLIENT_SECRET=your_client_secret
MICROSOFT_TENANT_ID=your_tenant_id
MICROSOFT_REDIRECT_URI=http://localhost:3000/auth/callback
SESSION_SECRET=your_session_secret
```
4. Start the server:
```bash
npm start
```

## Development Guidelines

1. **Styling**
   - Follow the established CSS structure
   - Use the French flag colors scheme (#002395, #FFFFFF, #ED2939)
   - Maintain responsive design principles

2. **Security**
   - Use HTTPS in production
   - Implement proper input validation
   - Follow authentication best practices

3. **Code Organization**
   - Modular route handling
   - Separate concerns (auth, business logic, etc.)
   - Consistent error handling

## Future Enhancements

- Database integration
- Enhanced user management
- Additional data visualization options
- Extended Microsoft 365 integration
- Automated testing implementation