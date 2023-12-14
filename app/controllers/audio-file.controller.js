
const AudioFile = require("../models/audioFile.js")

class audioFileController {

    static getAllSongs(req, res) {
        AudioFile.find().then(doc => {
            console.log(doc)
            res.status(200).send(doc)
        }).catch(err => {
            res.status(500).send({ error: "Data fetch failed" })
        })
    }

    static getSongById(req, res) {
        AudioFile.findOne({ _id: req.params.id }).then(doc => {
            res.status(200).send(doc)
        }).catch(err => {
            res.status(500).send({ error: "Data fetch failed" })
        })
    }

    static uploadSong(req, res) {
        new AudioFile({ ...req.body, imagePath: "http://localhost:3000/files/" + req.files.coverImage[0].filename, audioFilePath: "http://localhost:3000/files/" + req.files.audioFile[0].filename }).save().then(doc => {
            res.status(200).send({ message: "Song added succefully" })
        }).catch(err => {
            res.status(200).send({ message: "Song add failed" })
        })
    }

    static editSong(req, res) {
        AudioFile.findOneAndUpdate({ _id: req.params.id }, { ...req.body, imagePath: "http://localhost:3000/files/" + req.files.coverImage[0].filename, audioFilePath: "http://localhost:3000/files/" + req.files.audioFile[0].filename }).then(doc => {
            res.status(200).send({ message: "Song Updated succesfully" })
        }).catch(err => {
            res.status(500).send({ message: "Song Update failed" })
        })
    }

    static deleteSong(req, res) {
        AudioFile.findOneAndDelete({ _id: req.body._id }).then(doc => {
            res.status(200).send({ message: "Song deleted successfully" })
        }).catch(err => {
            res.status(500).send({ message: "Song delete failed" })
        })
    }
}

module.exports = audioFileController;