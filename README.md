# ERP-Peschaud

A web-based Enterprise Resource Planning system built with Express.js and modern web technologies, featuring document management and financial data tracking.

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB Atlas
- **Frontend**: 
  - HTML5, CSS3, JavaScript
  - React (for interactive components)
  - Chart.js for data visualization
- **Authentication**: Express-session
- **File Storage**: MongoDB GridFS
- **Microsoft Integration**: Microsoft Graph API
- **Excel Processing**: ExcelJS

## Project Structure

```
ERP-Peschaud/
├── config/
│   └── database.js     # MongoDB configuration
├── models/
│   ├── Document.js     # Document schema
│   ├── validation.js   # Data validators
│   └── indexes.js      # Database indexes
├── public/
│   ├── css/
│   │   ├── auth.css    # Authentication styles
│   │   ├── layout.css  # Layout styles
│   │   └── style.css   # Global styles
│   ├── dashboard.html  # Dashboard with React/Chart.js
│   ├── home.html      # Home page
│   ├── index.html     # Login page
│   └── welcome.html   # Welcome page
├── routes/
│   ├── auth.js        # Authentication routes
│   ├── documents.js   # Document management
│   └── onedrive.js    # Microsoft integration
├── utils/
│   └── backup.js      # Database backup utility
├── config.js          # Application configuration
├── server.js          # Main application entry
└── .env              # Environment variables
```

## Features

1. **Document Management**
   - PDF file storage using GridFS
   - Metadata attachment
   - Search and retrieval
   - File categorization

2. **Financial Data**
   - Transaction tracking
   - Currency support
   - Department/Subsidiary organization
   - Data validation

3. **Authentication System**
   - Session-based authentication
   - Role-based access control
   - Secure cookie handling

4. **Interactive Dashboard**
   - React-based components
   - Chart.js visualizations
   - Real-time data updates

## Database Setup

1. **MongoDB Atlas Configuration**
   - Cloud-hosted database
   - Automated backups
   - Scalable storage
   - Secure access

2. **Data Models**
   - Document storage
   - Financial records
   - User management
   - Metadata indexing

## Setup Instructions

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Configure environment variables in `.env`:
```env
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
MICROSOFT_CLIENT_ID=your_client_id
MICROSOFT_CLIENT_SECRET=your_client_secret
```

4. Start the server:
```bash
npm start
```

## Development Guidelines

1. **Database Best Practices**
   - Use provided validators
   - Follow schema definitions
   - Implement proper indexing
   - Regular backups

2. **Security**
   - HTTPS in production
   - Input validation
   - Secure file handling
   - Authentication checks

3. **Code Organization**
   - Modular components
   - Clear documentation
   - Consistent error handling
   - Type checking

## Future Enhancements

- Enhanced search capabilities
- Advanced reporting features
- Batch file processing
- API documentation
- Automated testing
- Performance monitoring