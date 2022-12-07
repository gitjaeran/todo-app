'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];

const db = {};
const sequelize =  new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
//sequelize 객체 선언시 매개변수로 db명, 사용자, 비번, 설정정보

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Todo = require('./Todo')(sequelize, Sequelize);

module.exports = db;
