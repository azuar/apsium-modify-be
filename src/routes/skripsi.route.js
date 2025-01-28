const app = require('express')();
const {
	getAll,
    getById, 
    getAllByUserId, 
    createSkripsi, 
    updateSkripsi
} = require('../controllers/skripsi.controller');

app.get('/', getAll);
app.get('/:id', getById);
app.get('/user/:id', getAllByUserId);
app.post('/add', createSkripsi);
app.post('/:id', updateSkripsi);

module.exports = app;