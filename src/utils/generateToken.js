require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
	return jwt.sign({ id }, 'passwordSangatRahasiaBroh', {
		expiresIn: '1d',
	});
};

module.exports = generateToken;