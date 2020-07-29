const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cron = require("node-cron"); 
const JsonToMongo = require('./src/services/worker/jsonToMongo');

require('dotenv').config();
require('./src/database/index');

const {APP_PORT} = process.env;


const routes = require('./routes');


const app = express();
const port = 3333;


//s m h D M dofWeek
//executa de minuto a minuto
cron.schedule("*/1 * * * *", ()=>{JsonToMongo()});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(routes);



app.listen(port, () => console.log(`backende rodando na porta `+ port));