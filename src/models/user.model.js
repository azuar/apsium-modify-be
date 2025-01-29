const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const UserSchema = new Schema(
	{
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		nama: {type: String, required: true},
		role: {type: String, required: true},
		nim: {type: String, required: false},
		nip: {type: String, required: false},
		nohp: {type: String, required: false},
		program_study: {type: String, required: false}
	},
	{
		timestamps: {
			createdAt: 'createdAt',
			updatedAt: 'updatedAt',
		},
	}
);

UserSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

// will encrypt password everytime its saved
UserSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = { UserModel };