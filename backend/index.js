const express = require('express');
const cors = require('cors');

const app = express();
const pageRoutes = require('./routes/pages');
app.use('/api/pages', pageRoutes);

// Middleware
app.use(cors());
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('Backend is running successfully!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
