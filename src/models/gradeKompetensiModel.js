const { DataTypes } = require('sequelize');
const { koneksi } = require("../config/database");

const gradeKompetensi = koneksi.define('gradeKompetensi', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    namaGradeKompetensi: {
        type: DataTypes.STRING
    },
},
    {
        paranoid: true,
        freezeTableName: true
    });

module.exports = gradeKompetensi