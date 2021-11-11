const SerieSchema = require("../models/serieSchema");
const mongoose = require("mongoose");

const getSerie = async (request, response) => {
    try {
        const series = await SerieSchema.find();
        response.status(200).json(series);        
    } catch (error) {
        response.status(500).json({message: error.message});        
    }
}

const getSerieById = async (request, response) => {
    try {
        const serieFound = await SerieSchema.findById(request.params.id);

        response.status(200).json(
            [
                {
                    message: "Série encontrada:",
                    serieFound
                }
            ]
        )       
    } catch (error) {
        response.status(500).json({message: error.message});        
    }
}

const createSerie = async (request, response) => {
    try {
        const serie = new SerieSchema({
            nome: request.body.nome,
            ano: request.body.ano,
            temporadas: request.body.temporadas,
            genero: request.body.genero,
            escritores: request.body.escritores,
            _id: new mongoose.Types.ObjectId()
        })

        const novaSerie = await serie.save();

        response.status(201).json(
            [
                {
                    message: "Nova serie cadastrada com sucesso!",
                    novaSerie
                }
            ]
        )        
    } catch (error) {
        response.status(500).json({messagem: error.message});        
    }
}

const updateSerie = async (request, response) => {
    try {
        const serieFound = await SerieSchema.findById(request.params.id);

        if (serieFound){
            serieFound.nome = request.body.nome || serieFound.nome;
            serieFound.ano = request.body.ano || serieFound.ano;
            serieFound.temporadas = request.body.temporadas || serieFound.temporadas;
            serieFound.genero = request.body.genero || serieFound.genero;
            serieFound.escritores = request.body.escritores || serieFound.escritores;
        }

        const serieSaved = await serieFound.save();

        response.status(200).json(
            [
                {
                    message: "Serie atualizada com sucesso!",
                    serieSaved
                }
            ]
        )
               
    } catch (error) {
        response.status(500).json({messagem: error.message});        
    }
}

const deleteSerie = async (request, response) => {
    try {
        const serieFound = await SerieSchema.findById(request.params.id);

        serieFound.delete();

        response.status(200).json(
            [
                {
                    message: "A serie a seguir foi deletada do sistema!",
                    serieFound
                }
            ]
        )

    } catch (error) {
        response.status(500).json({messagem: error.message});        
    }
}

module.exports = {
    getSerie,
    getSerieById,
    createSerie,
    updateSerie,
    deleteSerie    
}