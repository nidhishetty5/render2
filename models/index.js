import { Sequelize } from 'sequelize';
import EduLoanModel from './Eduloan.js';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database_setup/mydatabase.db'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.EduLoan = EduLoanModel(sequelize, Sequelize);

export default db;