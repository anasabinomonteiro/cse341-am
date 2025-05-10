require('dotenv').config();

// Settings
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const { mongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new mongoClient(uri);

// MongoDb Connection
async function connectToDatabase() {
    try {
        await client.connect();
        console.log('✅ Connected to MongoDB');
    } catch (error) {
        console.error('❌Error connecting to MongoDB:', error);
    }
}
connectToDatabase();

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for API
app.get('/professional', async (req, res) => {
    let base64Image;
    try {
        base64Image = await fs.readFile('./data/base64Image.txt', 'utf8');
    } catch (error) {
        console.error('Error reading base64Image.txt:', error);
        return res.status(500).json({ error: 'Error reading base64Image.txt' });
    };

    const professionalData = {
        professionalName: 'Ana Lucia da Silva Monteiro',
        base64Image: base64Image,
        nameLink: {
            firstName: 'Ana ',
            url: "https://www.linkedin.com/in/analuciamonteiro/"
        },
        primaryDescription: 'System Analyst',
        workDescription1: 'With 16 years of solid experience in the financial, tax and billing areas, in addition to notable growth in the last 6 years in the Information Technology area.',
        workDescription2: 'Working especially as a Protheus Systems Analyst - Totvs, I bring a diverse and valuable background.',
        linkTitleText: 'Links',
        linkedInLink: {
            text: 'LinkedIn',
            url: 'https://www.linkedin.com/in/analuciamonteiro/'
        },
        githubLink: {
            text: 'GitHub',
            url: 'https://github.com/anasabinomonteiro'
        },
        contactText: 'Contact me on LinkedIn'
    };

    // Send the professional data as a JSON response
    res.json(professionalData);
}
);

// Begin listening on port 8080
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

