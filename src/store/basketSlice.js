import { createSlice, createSelector } from "@reduxjs/toolkit";

export default basketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: [],
        orders: [],
        dish: {},
        restaurant: {}
    },
    reducers: {
        addBasketItem: (state, action) => {
            const dish = action.payload.dish
            const existDish = state.items.find(item => item.dish.id == dish.id)
            if(existDish) {
                existDish.quantity += 1
            } else {
                const newDish = {
                    dish,
                    quantity: 1
                }
                state.items.push(newDish)
            }
        },
        removeBasketItem: (state, action) => {
            
        },
        setRestaurantInfo: (state, action) => {
            const restaurant = action.payload.restaurant
            state.restaurant = restaurant
        },
        setDishInfo: (state, action) => {
            const dish = action.payload.dish
            state.dish = dish
        },
        createOrder: (state, action) => {
            // const timeDate = new Date()
            // const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour12: false, hour: '2-digit', minute: '2-digit' };
            // const formattedDateTime = timeDate.toLocaleString(undefined, options);
            // const order = {
            //     timeDate: formattedDateTime,
            //     order: state.items.find(item => item.restaurant.id == state.restaurant.id),
            //     total: action.payload.total
            // }   
            // state.orders.push(order)
        }
    }
})

export const selectNumOfItems = (state) => {
    const dish = state.basket.items.find(item => item.dish.id == state.basket.dish.id)
    if(dish) {
        return dish.quantity
    }
    return 0
}

export const getRestaurant = (state) => state.basket.restaurant

export const getDish = (state) => state.basket.dish

export const getBasketItems = (state) => {
    const basketItems = state.basket.items.filter(item => {
        return item.dish.restaurantID == state.basket.restaurant.id
    }) 
    return basketItems
}

export const getSubtotal = createSelector(
    getBasketItems,
    (items) => items.reduce( (sum, item) => sum + item.dish.price * item.quantity, 0  ).toFixed(2)
)
    // const basketItems = state.basket.items.find(item => item.restaurant.id == state.basket.restaurant.id) 
    // return basketItems.basketDishes.reduce( (sum, item) => sum + item.basketDish.price * item.quantity, 0  ).toFixed(2);


export const getOrderList = (state) => state.basket.orders


