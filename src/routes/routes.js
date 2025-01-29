const app = require('express')();
const userRoutes = require('./user.route');
const skripsiRoutes = require('./skripsi.route');
const dosenRoutes = require('./dosen.route');

app.use('/users', userRoutes);
app.use('/skripsi', skripsiRoutes);
app.use('/dosen', dosenRoutes);

module.exports = app;