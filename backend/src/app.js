const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const promptRoutes = require('./routes/prompt');
const { authenticateJWT } = require('./middleware/auth');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/prompts', authenticateJWT, promptRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'API is running' });
});

module.exports = app;
