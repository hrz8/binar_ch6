require('dotenv').config();

const { Customer, Order } = require('./models');

(async function() {
  const result = await Customer.findAll({
    include: {
      model: Order,
      as: 'orders'
    }
  });
  console.log(result);
})();
