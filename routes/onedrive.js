const express = require('express');
const router = express.Router();
const { Client } = require('@microsoft/microsoft-graph-client');
const ExcelJS = require('exceljs');
const axios = require('axios');

// Initialize Microsoft Graph Client
function getAuthenticatedClient(accessToken) {
    return Client.init({
        authProvider: (done) => {
            done(null, accessToken);
        }
    });
}

// Get Excel file from OneDrive
router.get('/excel/:fileId', async (req, res) => {
    try {
        const { fileId } = req.params;
        const accessToken = req.session.accessToken; // You'll need to implement session management

        const client = getAuthenticatedClient(accessToken);
        
        // Get file content
        const response = await client
            .api(`/me/drive/items/${fileId}/content`)
            .get();

        // Parse Excel file
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(response);
        
        // Get the first worksheet
        const worksheet = workbook.worksheets[0];
        
        // Convert worksheet data to JSON
        const data = [];
        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber > 1) { // Skip header row
                data.push(row.values);
            }
        });

        res.json(data);
    } catch (error) {
        console.error('Error fetching Excel file:', error);
        res.status(500).json({ error: 'Failed to fetch Excel data' });
    }
});

// List Excel files in OneDrive
router.get('/files', async (req, res) => {
    try {
        const accessToken = req.session.accessToken;
        const client = getAuthenticatedClient(accessToken);
        
        const response = await client
            .api('/me/drive/root/search(q=\'.xlsx\')')
            .get();

        res.json(response.value);
    } catch (error) {
        console.error('Error listing files:', error);
        res.status(500).json({ error: 'Failed to list files' });
    }
});

module.exports = router; 