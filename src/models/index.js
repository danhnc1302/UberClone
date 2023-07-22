// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "NEW": "NEW",
  "COOKING": "COOKING",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "COMPLETED": "COMPLETED"
};

const { OrderDish, BasketDish, Order, Basket, User, Dish, Restaurant } = initSchema(schema);

export {
  OrderDish,
  BasketDish,
  Order,
  Basket,
  User,
  Dish,
  Restaurant,
  OrderStatus
};