const express = require('express');
const app = express();
const port = 4000;

// Middleware to parse JSON bodies
// app.use(express.json());

const token="Shifa"

// Basic API endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

function authenticate(req,res,next){
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if(token == null) return res.sendStatus(401);
  if(token === token){
    next();
  }
  else{
    res.sendStatus(401);
  }
  
}

app.get('/test',authenticate, (req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
})

// Start the server
app.listen(port, '127.0.0.1', () => {
  console.log(`Server is running on ${port}`);
});