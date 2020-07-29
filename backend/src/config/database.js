require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'jmv',
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
  },
};