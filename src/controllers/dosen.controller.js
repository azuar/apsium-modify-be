const asyncHandler = require('express-async-handler');
const { DosenModel } = require('../models/dosen.model');

const getAll = asyncHandler(async (req, res, next) => {
	await DosenModel.find()
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => next(err));
});

const getById = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	await DosenModel.findById(id)
		.then(async (data) => {
            res.status(200).json({ data });
		})
		.catch((error) => {
			next(error);
		});
});

const createDosen = asyncHandler(async (req, res, next) => {
    const newSkripsi = new DosenModel(req.body);
    await newSkripsi
		.save()
		.then((skripsi) => {
			res.status(200).json({
				data: skripsi,
			});
		})
		.catch((err) => {
			next(err)
		});
});

const updateDosen = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	const options = { new: true };

	await DosenModel.findByIdAndUpdate(id, req.body, options)
		.then((skripsi) => {
			res.status(200).json({ data: skripsi });
		})
		.catch((error) => {
			next(error);
		});
});

const deleteDosen = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	await DosenModel.findByIdAndDelete(id)
		.then((user) => {
			res.status(200).json({ data: user, message: `User deleted` });
		})
		.catch((err) => next(err));
});

module.exports = {
	getAll, 
    getById, 
    createDosen, 
    updateDosen,
	deleteDosen
};