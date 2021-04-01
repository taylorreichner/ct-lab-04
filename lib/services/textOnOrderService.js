const Recipe = require('../models/Recipe');
const { sendSms } = require('../utils/twilio');

module.exports = class textOnOrderService {
  static async create( recipe ) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `New Order received for ${recipe.title}`
    );

    const order = await Recipe.insert( recipe );

    return order;
  }
};
