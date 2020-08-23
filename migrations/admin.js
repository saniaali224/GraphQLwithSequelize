'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('admin', {
            Id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER(10).UNSIGNED
            },
            Email: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            Password: {
                type: Sequelize.STRING(1000),
                allowNull: false
            },
            Salt: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            RoleId: {
                type: Sequelize.TINYINT,
                allowNull: false
            },
            Name: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
           
            
            CreatedDate: {
                type: Sequelize.DATE,
                allowNull: false
            },
            
            CreatedBy: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('admin');
    }
};