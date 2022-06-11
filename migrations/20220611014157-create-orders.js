module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      order_id: {
        autoIncrement: true,
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
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
