import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum TransportationModes {
  DRIVING = "DRIVING",
  BICYCLING = "BICYCLING"
}

export enum OrderStatus {
  NEW = "NEW",
  COOKING = "COOKING",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  COMPLETED = "COMPLETED"
}



type EagerCourier = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Courier, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly sub: string;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly transportationMode: TransportationModes | keyof typeof TransportationModes;
  readonly orders?: (OrderCourier | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCourier = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Courier, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly sub: string;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly transportationMode: TransportationModes | keyof typeof TransportationModes;
  readonly orders: AsyncCollection<OrderCourier>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Courier = LazyLoading extends LazyLoadingDisabled ? EagerCourier : LazyCourier

export declare const Courier: (new (init: ModelInit<Courier>) => Courier) & {
  copyOf(source: Courier, mutator: (draft: MutableModel<Courier>) => MutableModel<Courier> | void): Courier;
}

type EagerOrderDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly orderID: string;
  readonly Dishes?: (OrderDishDish | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrderDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly orderID: string;
  readonly Dishes: AsyncCollection<OrderDishDish>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OrderDish = LazyLoading extends LazyLoadingDisabled ? EagerOrderDish : LazyOrderDish

export declare const OrderDish: (new (init: ModelInit<OrderDish>) => OrderDish) & {
  copyOf(source: OrderDish, mutator: (draft: MutableModel<OrderDish>) => MutableModel<OrderDish> | void): OrderDish;
}

type EagerBasketDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasketDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly basketID: string;
  readonly Dishes?: (BasketDishDish | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBasketDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasketDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly basketID: string;
  readonly Dishes: AsyncCollection<BasketDishDish>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BasketDish = LazyLoading extends LazyLoadingDisabled ? EagerBasketDish : LazyBasketDish

export declare const BasketDish: (new (init: ModelInit<BasketDish>) => BasketDish) & {
  copyOf(source: BasketDish, mutator: (draft: MutableModel<BasketDish>) => MutableModel<BasketDish> | void): BasketDish;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly userID: string;
  readonly OrderDishes?: (OrderDish | null)[] | null;
  readonly Restaurants?: (OrderRestaurant | null)[] | null;
  readonly Couriers?: (OrderCourier | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly userID: string;
  readonly OrderDishes: AsyncCollection<OrderDish>;
  readonly Restaurants: AsyncCollection<OrderRestaurant>;
  readonly Couriers: AsyncCollection<OrderCourier>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerBasket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Basket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly restaurantID: string;
  readonly BasketDishes?: (BasketDish | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBasket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Basket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly restaurantID: string;
  readonly BasketDishes: AsyncCollection<BasketDish>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Basket = LazyLoading extends LazyLoadingDisabled ? EagerBasket : LazyBasket

export declare const Basket: (new (init: ModelInit<Basket>) => Basket) & {
  copyOf(source: Basket, mutator: (draft: MutableModel<Basket>) => MutableModel<Basket> | void): Basket;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly name: string;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Baskets?: (Basket | null)[] | null;
  readonly Orders?: (Order | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly name: string;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Baskets: AsyncCollection<Basket>;
  readonly Orders: AsyncCollection<Order>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly price: number;
  readonly restaurantID: string;
  readonly basketdishs?: (BasketDishDish | null)[] | null;
  readonly orderdishs?: (OrderDishDish | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly price: number;
  readonly restaurantID: string;
  readonly basketdishs: AsyncCollection<BasketDishDish>;
  readonly orderdishs: AsyncCollection<OrderDishDish>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Dish = LazyLoading extends LazyLoadingDisabled ? EagerDish : LazyDish

export declare const Dish: (new (init: ModelInit<Dish>) => Dish) & {
  copyOf(source: Dish, mutator: (draft: MutableModel<Dish>) => MutableModel<Dish> | void): Dish;
}

type EagerRestaurant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restaurant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly deliveryFee: number;
  readonly minDeliveryTime: number;
  readonly maxDeliveryTime: number;
  readonly rating?: number | null;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Dishes?: (Dish | null)[] | null;
  readonly Baskets?: (Basket | null)[] | null;
  readonly orders?: (OrderRestaurant | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRestaurant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restaurant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly deliveryFee: number;
  readonly minDeliveryTime: number;
  readonly maxDeliveryTime: number;
  readonly rating?: number | null;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Dishes: AsyncCollection<Dish>;
  readonly Baskets: AsyncCollection<Basket>;
  readonly orders: AsyncCollection<OrderRestaurant>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Restaurant = LazyLoading extends LazyLoadingDisabled ? EagerRestaurant : LazyRestaurant

export declare const Restaurant: (new (init: ModelInit<Restaurant>) => Restaurant) & {
  copyOf(source: Restaurant, mutator: (draft: MutableModel<Restaurant>) => MutableModel<Restaurant> | void): Restaurant;
}

type EagerOrderCourier = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderCourier, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly courierId?: string | null;
  readonly orderId?: string | null;
  readonly courier: Courier;
  readonly order: Order;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrderCourier = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderCourier, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly courierId?: string | null;
  readonly orderId?: string | null;
  readonly courier: AsyncItem<Courier>;
  readonly order: AsyncItem<Order>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OrderCourier = LazyLoading extends LazyLoadingDisabled ? EagerOrderCourier : LazyOrderCourier

export declare const OrderCourier: (new (init: ModelInit<OrderCourier>) => OrderCourier) & {
  copyOf(source: OrderCourier, mutator: (draft: MutableModel<OrderCourier>) => MutableModel<OrderCourier> | void): OrderCourier;
}

type EagerOrderDishDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderDishDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orderDishId?: string | null;
  readonly dishId?: string | null;
  readonly orderDish: OrderDish;
  readonly dish: Dish;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrderDishDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderDishDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orderDishId?: string | null;
  readonly dishId?: string | null;
  readonly orderDish: AsyncItem<OrderDish>;
  readonly dish: AsyncItem<Dish>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OrderDishDish = LazyLoading extends LazyLoadingDisabled ? EagerOrderDishDish : LazyOrderDishDish

export declare const OrderDishDish: (new (init: ModelInit<OrderDishDish>) => OrderDishDish) & {
  copyOf(source: OrderDishDish, mutator: (draft: MutableModel<OrderDishDish>) => MutableModel<OrderDishDish> | void): OrderDishDish;
}

type EagerBasketDishDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasketDishDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly basketDishId?: string | null;
  readonly dishId?: string | null;
  readonly basketDish: BasketDish;
  readonly dish: Dish;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBasketDishDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasketDishDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly basketDishId?: string | null;
  readonly dishId?: string | null;
  readonly basketDish: AsyncItem<BasketDish>;
  readonly dish: AsyncItem<Dish>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BasketDishDish = LazyLoading extends LazyLoadingDisabled ? EagerBasketDishDish : LazyBasketDishDish

export declare const BasketDishDish: (new (init: ModelInit<BasketDishDish>) => BasketDishDish) & {
  copyOf(source: BasketDishDish, mutator: (draft: MutableModel<BasketDishDish>) => MutableModel<BasketDishDish> | void): BasketDishDish;
}

type EagerOrderRestaurant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderRestaurant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orderId?: string | null;
  readonly restaurantId?: string | null;
  readonly order: Order;
  readonly restaurant: Restaurant;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrderRestaurant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderRestaurant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orderId?: string | null;
  readonly restaurantId?: string | null;
  readonly order: AsyncItem<Order>;
  readonly restaurant: AsyncItem<Restaurant>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OrderRestaurant = LazyLoading extends LazyLoadingDisabled ? EagerOrderRestaurant : LazyOrderRestaurant

export declare const OrderRestaurant: (new (init: ModelInit<OrderRestaurant>) => OrderRestaurant) & {
  copyOf(source: OrderRestaurant, mutator: (draft: MutableModel<OrderRestaurant>) => MutableModel<OrderRestaurant> | void): OrderRestaurant;
}