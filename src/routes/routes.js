const app = require('express')();
const userRoutes = require('./user.route');

app.use('/users', userRoutes);

module.exports = app;