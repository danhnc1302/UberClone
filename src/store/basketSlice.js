import { createSlice, createSelector } from "@reduxjs/toolkit";

export default basketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: [],
        orders: [],
        restaurant:"",
        dishId:"",
    },
    reducers: {
        addBasketItem: (state, action) => {
            const restaurantId = state.restaurant.id
            const newDish = action.payload.dish 
            const basketRestaurant = state.items.find(item => item.restaurant.id == restaurantId)
            if(basketRestaurant)
            {
                const basketDish = basketRestaurant.basketDishes.find(item => item.basketDish.id == newDish.id)
                if(basketDish) {
                    basketDish.quantity += 1
                } else {
                    const newDishTemp = {
                        basketDish: newDish,
                        quantity: 1,
                    }
                    basketRestaurant.basketDishes.push(newDishTemp)
                }
            }
            else {
                const newRestaurant = {
                    restaurant: state.restaurant,
                    basketDishes: [
                        {
                            basketDish: newDish,
                            quantity: 1
                        }
                    ]
                }
                state.items.push(newRestaurant)
            }
        },
        removeBasketItem: (state, action) => {
            
        },
        setRestaurantInfo: (state, action) => {
            const restaurantInfo = {
                id: action.payload.restaurantId,
                name: action.payload.restaurantName,
                image: action.payload.restaurantImage,
                delivery: action.payload.deliveryFee
            }
            state.restaurant = restaurantInfo
        },
        setDishId: (state, action) => {
            const dishId = action.payload.dishId
            state.dishId = dishId
        },
        createOrder: (state, action) => {
            const timeDate = new Date()
            const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour12: false, hour: '2-digit', minute: '2-digit' };
            const formattedDateTime = timeDate.toLocaleString(undefined, options);
            const order = {
                timeDate: formattedDateTime,
                order: state.items.find(item => item.restaurant.id == state.restaurant.id),
                total: action.payload.total
            }   
            state.orders.push(order)
        }
    }
})

export const selectNumOfItems = (state) => {
    const restaurant = state.basket.items.find(item => item.restaurant.id == state.basket.restaurant.id)
    if(restaurant) {
        const quantity = restaurant.basketDishes.find(item => item.basketDish.id == state.basket.dishId)
        if(quantity) {
            return quantity.quantity
        }
        return 0
    }
    return 0
}

export const getRestaurant = (state) => state.basket.restaurant

export const getDishId = (state) => state.basket.dishId

export const getBasketItems = (state) => {
    const basketItems = state.basket.items.find(item => item.restaurant.id == state.basket.restaurant.id) 
    return basketItems.basketDishes
}

export const getSubtotal = (state) => {
    const basketItems = state.basket.items.find(item => item.restaurant.id == state.basket.restaurant.id) 
    return basketItems.basketDishes.reduce( (sum, item) => sum + item.basketDish.price * item.quantity, 0  ).toFixed(2);
}

export const getOrderList = (state) => state.basket.orders

