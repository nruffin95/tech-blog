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
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      markdown: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "Post",
    }
  );
  
  module.exports = Articles;
