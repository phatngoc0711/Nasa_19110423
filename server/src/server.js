const http = require('http');

require('dotenv').config();

const app = require('./app');


const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    await loadPlanetsData();


    server.listen(PORT, () => {
        console.log(`Listening on ${PORT} ...`);
    });
}

startServer();


