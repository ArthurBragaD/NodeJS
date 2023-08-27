// const { sequelize } = require ("../config/database");

// module.exports = (sequelize,DataTypes) => {

// var Livros = sequelize.define ('livros',{
//     id:{
//         type: DataTypes.BIGINT,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     title: {
//         type: DataTypes.STRING
//     },
//     description: {
//         type: DataTypes.STRING
//     }
    


// },
// { timestamps: false }


// )

// return Livros

// }

const { calcularSalarioLiquido } = require('../calcularSalarioLiquido');

module.exports = (sequelize, DataTypes) => {
    const Empregados = sequelize.define('Empregados', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING
        },
        salario_bruto: {
            type: DataTypes.DECIMAL(10, 2)
        },
        salario_liquido: {
            type: DataTypes.VIRTUAL,
            get() {
                return calcularSalarioLiquido(this.salario_bruto);
            }
        },
        departamento: {
            type: DataTypes.ENUM('1', '2', '3', '4')
        }
    }, {
        timestamps: false,
        getterMethods: {
            nomeDepartamento() {
                const departamentos = [
                    'Administrativo',
                    'Designer',
                    'Contabilidade',
                    'Fábrica'
                ];
                return departamentos.at(parseInt(this.departamento) - 1);
            }
        }
    });

    return Empregados;
};