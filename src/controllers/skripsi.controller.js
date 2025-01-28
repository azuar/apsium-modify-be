const asyncHandler = require('express-async-handler');
const { SkripsiModel } = require('../models/skripsi.model');
const { UserModel } = require('../models/user.model');

const getAll = asyncHandler(async (req, res, next) => {
	await SkripsiModel.find()
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => next(err));
});

const getById = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	await SkripsiModel.findById(id)
		.then((data) => {
			res.status(200).json({ data });
		})
		.catch((error) => {
			next(error);
		});
});

const getAllByUserId = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	await SkripsiModel.find( { user_id: id })
		.then(async (data) => {
            const userInfo = await UserModel.findById( id )
                .then((data) => {
                    const info = JSON.stringify(data)
                    return JSON.parse(info)
                })
                .catch((error) => {
                    next(error);
                });
            data.forEach((element) => {
                element.mahasiswa = userInfo
            });

            res.status(200).json({ data });
            
		})
		.catch((error) => {
			next(error);
		});
});

const createSkripsi = asyncHandler(async (req, res, next) => {
    const newSkripsi = new SkripsiModel(req.body);
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

const updateSkripsi = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	const options = { new: true };

	await SkripsiModel.findByIdAndUpdate(id, req.body, options)
		.then((skripsi) => {
			res.status(200).json({ data: skripsi });
		})
		.catch((error) => {
			next(error);
		});
});

module.exports = {
	getAll, 
    getById, 
    getAllByUserId, 
    createSkripsi, 
    updateSkripsi
};