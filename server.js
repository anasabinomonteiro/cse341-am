// 
const express = require('express');
const { text } = require('stream/consumers');
const fs = require('fs').promises;
const app = express();
const port = 8080;

// Get to /professional
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
            firstName: 'Ana',
            url: "https://www.linkedin.com/in/analuciamonteiro/"
        },
        primaryDescription: 'Software Engineer',
        workDescription: 'Ana is a software engineer with 5 years of experience in web development. She has worked on various projects using JavaScript, React, and Node.js.',
        workDescription2: 'Ana is a software engineer with 5 years of experience in web development. She has worked on various projects using JavaScript, React, and Node.js.',
        linkTitleText: 'LinkedIn',
        linkedInLink: {
            text: 'LinkedIn',
            url: 'https://www.linkedin.com/in/analuciamonteiro/'
        },
        githubLink: {
            text: 'GitHub',
            url: 'https://github.com/anasabinomonteiro'
        },
        contactText: 'Contact me'
    };

    // Send the professional data as a JSON response
    res.json(professionalData);
}
);

// Begin listening on port 8080
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

