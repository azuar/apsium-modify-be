const mongoose = require('mongoose');
const { Schema } = mongoose;

const SkripsiSchema = new Schema(
    {
        user_id: { type: String, required: true },
        judul: { type: String, required: true },
        pembimbing1: {type: String, required: true},
        pembimbing2: {type: String, required: true},
        setuju1: {type: Boolean, required: false},
        setuju2: {type: Boolean, required: false},
        status: {type: String, required: false},
        waktuSeminar: {type: String, required: false},
        waktuSidang: {type: String, required: false},
        mahasiswa: {type:Object, required: false},
    },
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt',
        },
    }
);

const SkripsiModel = mongoose.model('skripsi', SkripsiSchema);

module.exports = { SkripsiModel };