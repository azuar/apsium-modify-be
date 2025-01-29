const app = require('express')();
const {
	getAll,
    getById, 
    getAllByUserId, 
    createSkripsi, 
    updateSkripsi,
    deleteSkripsi
} = require('../controllers/skripsi.controller');

app.get('/', getAll);
app.get('/:id', getById);
app.get('/user/:id', getAllByUserId);
app.post('/add', createSkripsi);
app.put('/update/:id', updateSkripsi);
app.delete('/delete/:id', deleteSkripsi);

module.exports = app;