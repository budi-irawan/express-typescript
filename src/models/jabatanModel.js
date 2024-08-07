const { DataTypes } = require('sequelize');
const { koneksi } = require('../config/database');
const gradeKompetensi = require('./gradeKompetensiModel');

const jabatan = koneksi.define('jabatan', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    namaJabatan: {
        type: DataTypes.STRING
    },
},
    {
        paranoid: true,
        freezeTableName: true
    });

jabatan.belongsTo(gradeKompetensi, { foreignKey: 'gradeKompetensiId' })
gradeKompetensi.hasMany(jabatan, { foreignKey: 'gradeKompetensiId' })

module.exports = jabatan