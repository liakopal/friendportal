const express = require('express');
const app = express();
const path = require('path');

// Middleware to parse the incoming request bodies
app.use(express.urlencoded({ extended: true }));

// Dummy user data - in a real application, fetch from a database
const userProfile = {
    "username": "Jasmine Chok",
    "age": "20",
    "email": "JasmineChok@gmail.com",
    "gender": "Female",
    "interests": "Tennis, swimming, cinema"
};

// Serve the public directory as static
app.use(express.static(path.join(__dirname, 'public')));

// Serve login.html at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.get('/profile', (req, res) => {
    // In a real application, you'd fetch this data from a database
    // For now, we'll send the dummy data
    res.json(userProfile);
});


// Hardcoded credentials for demonstration
const HARDCODED_USERNAME = 'admin';
const HARDCODED_PASSWORD = '123';

// Route to handle login POST request
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === HARDCODED_USERNAME && password === HARDCODED_PASSWORD) {
        res.redirect('/myhome.html');
    } else {
        res.send('Invalid Credentials');
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
