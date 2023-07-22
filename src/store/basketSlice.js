import { createSlice, createSelector } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: [],
        baskets: [],
        orders: [],
    },
    reducers: {
        increaseQuantity: (state, action) => {
            const dishId = action.payload.dishId
            const existDish = state.items.find(item => item.dishId == dishId)
            if(existDish) {
                existDish.quantity += 1
            } else {
                const newDish = {
                    dishId,
                    quantity: 1
                }
                state.items.push(newDish)
            }
        },
        decreaseQuantity: (state, action) => {
            const dishId = action.payload.dishId
            const existDish = state.items.find(item => item.dishId == dishId)
            if(existDish) {
                if(existDish.quantity == 1) {
                    const newItems = state.items.filter(item => item.dishId !== existDish.dishId)
                    state.items = newItems
                } else {
                    existDish.quantity -=1
                }
            } 
        },
        addToBasket: (state, action) => {
            const dishId = action.payload.dishId;
            const restaurantId = action.payload.restaurantId;
            const item = state.items.find((item) => item.dishId === dishId);
            const restaurantExist = state.baskets.find((item) => item.restaurantId === restaurantId);
           
            if (item) {
              const newItems = state.items.filter((item) => item.dishId !== dishId);
              state.items = newItems;
          
              if (restaurantExist) {
                const itemCopy = { ...item }; // Tạo một bản sao của món ăn
                restaurantExist.baskets.push(itemCopy);
              } else {
                state.baskets.push({
                  restaurantId: restaurantId,
                  baskets: [item],
                });
              }
            }
          },
        createOrder: (state, action) => {
            const timeDate = new Date()
            const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour12: false, hour: '2-digit', minute: '2-digit' };
            const formattedDateTime = timeDate.toLocaleString(undefined, options);
            const restaurantId = action.payload.restaurantId
            const total = action.payload.total
            const order = {
                timeDate: formattedDateTime,
                restaurantId: state.baskets.find(basket => basket.restaurantId == restaurantId).restaurantId,
                total: total
            }   
            state.orders.push(order)
        }
    }
})

export default basketSlice;

export const getDishQuantity = (state, dishId) => {
    const item = state.basket.items.find(item => item.dishId == dishId)
    if(item) {
        return item.quantity
    } else {
        return 0
    }
}

export const getBasketQuantity = (state, restaurantId) => { 
    const basketQuantity = state.basket.baskets.find(basket => basket.restaurantId === restaurantId);
    if(basketQuantity) {
        return basketQuantity.baskets.length;
    }
}

export const getBasketItems = (state, restaurantId) => {
    const baskets = state.basket.baskets.find(basket => basket.restaurantId == restaurantId)
    return baskets.baskets
}

export const getOrderList = (state) => {
    return state.basket.orders
}

// export const getSubtotal = createSelector(
//     getBasketItems,
//     (items) => items.reduce( (sum, item) => sum + item.dish.price * item.quantity, 0  ).toFixed(2)
// )
//     // const basketItems = state.basket.items.find(item => item.restaurant.id == state.basket.restaurant.id) 
//     // return basketItems.basketDishes.reduce( (sum, item) => sum + item.basketDish.price * item.quantity, 0  ).toFixed(2);


