
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
        depart: {
            type: DataTypes.ENUM('1', '2', '3', '4')
        }
    }, {
        timestamps: false,
        // getterMethods: {
        //     nomeDepartamento() {
        //         const departamentos = [
        //             'Administrativo',
        //             'Designer',
        //             'Contabilidade',
        //             'Fábrica'
        //         ];
        //         return departamentos.at(parseInt(this.departamento) - 1);
        //     }
        // }
    });

    return empregados;
};