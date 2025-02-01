const mongoose = require('mongoose');
const { Schema } = mongoose;

const DosenSchema = new Schema(
    {
        nip: { type: String, required: true },
        nama: { type: String, required: true },
        program_study: {type: String, required: true},
    },
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt',
        },
    }
);

const DosenModel = mongoose.model('dosen', DosenSchema);

module.exports = { DosenModel };