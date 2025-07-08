const express = require('express');
const app = express();
const PORT = 3000;

// Simple route
app.get('/test', (req, res) => {
  res.send('this is a test route');
});


app.get('/', (req, res) => {
  res.send('this is a / route');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
