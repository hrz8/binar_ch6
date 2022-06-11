const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      this.hasMany(
        models['Order'], 
        { as: "orders", foreignKey: "customer_id"}
      );
    }
  }

  Customer.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    full_name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "customers_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

  return Customer;
};