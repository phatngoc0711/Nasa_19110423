const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URL = "mongodb+srv://lengocphat:WW.LBp-B9.2e4ad@cluster0.uuw1ilf.mongodb.net/";
mongoose.connection.once('open', () => {
    console.log('MongoDB connected')
});
mongoose.connection.on('error', (err) => {
    console.error(err);
});
async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
}
async function mongoDisconnect() {
    await mongoose.disconect();
}
module.exports = {
    mongoConnect,
    mongoDisconnect,
}