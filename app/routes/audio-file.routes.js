const express = require("express");
const router = express.Router();
const audioFileController = require("../controllers/audio-file.controller");
const multer = require("multer");
const cors = require("cors");
router.use(cors());
const storage = multer.diskStorage({
    destination: './public/files',
    filename: function (req, file, cb) {
        const uniquePreffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniquePreffix + "-" + file.originalname)
    }
});

const upload = multer({
    storage: storage
}).fields([{ name: "coverImage" }, { name: "audioFile" }]);




router.get("/get-all", audioFileController.getAllSongs);

router.get("/get/:id", audioFileController.getSongById);

router.post("/add-song/", upload, audioFileController.uploadSong);

router.post("/edit-song/:id", upload, audioFileController.editSong);

router.post("/delete-song/", audioFileController.deleteSong);


module.exports = router;