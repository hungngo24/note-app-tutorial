const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.tgm0m.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
            {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            }
        );
        console.log("Mongoose Connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
module.exports = { connectDB };
