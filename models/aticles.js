const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Department model
class Articles extends Model {}
  
  // create fields/columns for Department model
  Articles.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      markdown: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAT: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Date.now,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "Articles",
    }
  );
  
  module.exports = Articles;
