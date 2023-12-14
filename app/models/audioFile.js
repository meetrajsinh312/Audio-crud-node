const mongoose = require("mongoose");
const schmea = mongoose.Schema;

var audioFileSchema = new schmea({
    name: String,
    desc: String,
    imagePath: String,
    audioFilePath: String,
    isDeleted: Boolean,
},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

module.exports = mongoose.model("audio-file", audioFileSchema);