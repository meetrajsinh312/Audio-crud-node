const express = require("express");
const app = express();
const port = 3000;
const audioFileRoutes = require("./app/routes/audio-file.routes");
const db = require("./app/services/mongoose");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/audio-file", audioFileRoutes);
app.use("/files", express.static('./public/files'));

db.dbConnection();

app.listen(port, () => {
    console.log("Http server listining on port:::", port);
})
