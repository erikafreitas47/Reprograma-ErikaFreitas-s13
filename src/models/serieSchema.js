const mongoose = require("mongoose");

const serieSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    nome: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    temporadas: {
        type: Number,
        required: true
    },
    genero: [
        {
        type: String,
        required: true
    },
    ],
    escritores: [
        {
            type: String,
            required: true
        },
    ],
    dataCriacao: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model("serie", serieSchema);