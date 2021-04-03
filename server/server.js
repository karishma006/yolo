const express = require('express');
const app = express();
const PORT = 8080;
const activityRoutes = require('./routes/activityRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use('/public', express.static('public'));

app.use('/', activityRoutes);
app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});