const dbConfig = require("../config/db.config");
const mongoose = require("mongoose");
class DatabaseService {
    static dbConnection() {
        mongoose.connect(`mongodb+srv://${dbConfig.USER_NAME}:${dbConfig.PASSWORD}@cluster0.u2yzfc3.mongodb.net/`).then(e => {
        }).catch(err => {
            console.log("Failed to connect :::", err);
        });

        mongoose.connection.on('connected', (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Succesfully connected to database::: " + dbConfig.DB_NAME);
            }
        })

        mongoose.connection.on('error', (err) => {
            console.log(`Failed to connect to database::: ${dbConfig.DB_NAME}`);
        });

        mongoose.connection.on('disconnected', (err) => {
            console.log(`Connection to database ${dbConfig.DB_NAME} disconnected`);
        });
    }
}

module.exports = DatabaseService;