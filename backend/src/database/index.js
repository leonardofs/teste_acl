const Sequelize = require ('sequelize');
require('dotenv').config();
const User = require('../models/User');
const databaseConfig = require('../config/database');
const mongoose = require('mongoose');

const models = [User];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }


    //configs do sequelize
  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    
  }

  //configs do mongoose
  mongo() {
        this.mongoConnection = mongoose.connect( 'mongodb://localhost:27017/mongojmv', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        });
    }
}

module.exports = new Database();
