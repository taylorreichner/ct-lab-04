const Recipe = require('../models/Recipe');
const { sendSms } = require('../utils/twilio');

module.exports = class textOnUpdateService {
  static async update({title},{id}) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `Your order has been updated, new title is ${title}`
    );
 
    const recipe = await Recipe.update(title, id);

    return recipe;
  }
};