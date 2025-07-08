require('dotenv').config(); // Must be first

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI;

console.log('[DEBUG] MONGO_URI:', MONGO_URI); // Check this output

if (!MONGO_URI) {
  console.error('❌ MONGODB_URI is undefined. Check your .env file.');
  process.exit(1);
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1);
});

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Root route is working!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
