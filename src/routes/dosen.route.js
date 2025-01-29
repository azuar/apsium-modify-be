const app = require('express')();
const {
	getAll, 
    getById, 
    createDosen, 
    updateDosen,
	deleteDosen
} = require('../controllers/dosen.controller');

app.get('/', getAll);
app.get('/:id', getById);
app.post('/add', createDosen);
app.put('/update/:id', updateDosen);
app.delete('/delete/:id', deleteDosen);

module.exports = app;