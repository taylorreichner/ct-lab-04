const Recipe = require('../models/Recipe');
const { sendSms } = require('../utils/twilio');

module.exports = class textOnDeleteService {
  static async deleteItem({id}) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `Your order has been deleted`
    );
 
    const recipe = await Recipe.deleteItem( id );

    return recipe;
  }
};