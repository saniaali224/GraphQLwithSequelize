'use strict';
module.exports = (sequelize, DataTypes) => {
    const admin = sequelize.define('admin', {
        Id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        Email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Password: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        Salt: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        RoleId: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        Name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        
        CreatedDate: {
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW,
            allowNull: false
        },
        
        CreatedBy: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        underscored: false,
        timestamps: false,
        tableName: 'admin'
    });
    admin.associate = function (models) {
        // associations can be defined here
    };
    return admin;
};