'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Support extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Support.init({
    productName: DataTypes.STRING,
    topicIssue: DataTypes.STRING,
    descriptionOfProblem: DataTypes.STRING,
    coveredInWarranty: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Support',
  });
  return Support;
};