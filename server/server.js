const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
// app.use(express.json());

// Basic API endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Start the server
app.listen(port, '127.0.0.1', () => {
  console.log(`Server is running on http://localhost:${port}`);
});