'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IPhone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  IPhone.init({
    productName: DataTypes.STRING,
    color: DataTypes.STRING,
    capacity: DataTypes.STRING,
    price: DataTypes.INTEGER,
    hasPaymentPlan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'IPhone',
  });
  return IPhone;
};