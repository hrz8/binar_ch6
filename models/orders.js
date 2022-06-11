const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.belongsTo(
        models['Customer'],
        { as: "customer", foreignKey: "customer_id"}
      );
    }
  }

  Order.init({
    order_id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dish_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'customers',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    schema: 'public',
    timestamps: false
  });

  return Order;
};