const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/sequelize');

const Todo = sequelize.define(
    "Todo",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        deskripsi: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('Belum Selesai', 'Dikerjakan', 'Selesai'),
            allowNull: false
        }
    },
    {
        tableName: 'todos',
        freezeTableName: true,
        paranoid: true,
        timestamps: true,
    }
);

module.exports = Todo;
