const mongoose = require('mongoose');
const { Schema } = mongoose;

const SkripsiSchema = new Schema(
    {
        user_id: { type: String, required: true },
        judul: { type: String, required: true },
        pembimbing1: {type: Object, required: true},
        pembimbing2: {type: Object, required: true},
        penguji1: {type: Object, required: false},
        penguji2: {type: Object, required: false},
        penguji3: {type: Object, required: false},
        setuju1: {type: Boolean, required: false},
        setuju2: {type: Boolean, required: false},
        status: {type: String, required: false},
        waktuSeminar: {type: String, required: false},
        waktuSidang: {type: String, required: false},
        mahasiswa: {type:Object, required: false},
        berkas_seminar: {type:String, required: false},
        berkas_sidang: {type:String, required: false},
        berkas_revisi_seminar: {type:String, required: false},
        berkas_revisi_sidang: {type:String, required: false},
        tanggal_seminar: {type:String, required: false},
        waktu_seminar: {type:String, required: false},
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