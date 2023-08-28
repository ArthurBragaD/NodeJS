const { salarioLiquido } = require('../salarioLiquido');

module.exports = (sequelize, DataTypes) => {
    const empregados = sequelize.define('empregados', {
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
                return salarioLiquido(this.salario_bruto);
            }
        },
        depart: {
            type: DataTypes.ENUM('1', '2', '3', '4')
        }
    }, {
        timestamps: false,
        getterMethods: {
            departamento() {
                const depart = [
                    'Administrativo',
                    'Designer',
                    'Contabilidade',
                    'Fábrica'
                ];
                return depart.at(parseInt(this.depart) - 1);
            }
        }
    });

    return empregados;
};