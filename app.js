const express = require('express');
const connectDB = require('./config/db');

const submissions = require('./routes/api/submissions');
const prompts = require('./routes/api/prompts');

const app = express();

connectDB();

app.get('/', (req, res) => res.send('Hello world'));
app.use(express.json({ extended: false }));
app.use('/api/submissions', submissions);
app.use('/api/prompts', prompts);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
