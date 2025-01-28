const app = require('express')();
const userRoutes = require('./user.route');
const skripsiRoutes = require('./skripsi.route');

app.use('/users', userRoutes);
app.use('/skripsi', skripsiRoutes);

module.exports = app;