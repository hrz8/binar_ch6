module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('customers', {
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
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('customers');
  }
};
