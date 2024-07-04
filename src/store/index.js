import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialCartState = { showCart: true, initialquantity: 0 }

const myCartSlice = createSlice({
    name: 'myCart',
    initialState: { showCart: true, initialquantity: 0 }, //initialState : { counter: 0, showCounter: true}
    reducers: {
        // increament (state) {
        //     state.initialquantity++;
        // },
        // decrement(state) {
        //     state.counter= state.initialquantity--
        // },
        toggle(state) {
            state.showCart = !state.showCart
        },
    }

})

const cartItemsInitialState = {
    items: [],
    totalQuantity: 0,

}

const cartItemSlice = createSlice(
    {
        name: 'cartItems',
        initialState: cartItemsInitialState,
        reducers: {
            addItemToCart(state, action) {
                const newItem = action.payload
                const existingItem = state.items.find(item => item.id === newItem.id)
                state.totalQuantity++
                if (existingItem) {
                    existingItem.quantity++
                    existingItem.totalPrice = existingItem.totalPrice + newItem.price
                } else {
                    state.items.push(
                        {
                            id: newItem.id,
                            price: newItem.price,
                            quantity: 1,
                            totalPrice: newItem.price
                        }
                    )
                }
            },
            removeItemFromCart(state, action) {
                state.totalQuantity--
                const id = action.payload;
                const existingItem = state.items.find(item=> item.id===id)
                if(existingItem.quantity === 1){
                    state.items = state.items.filter(item=>item.id !== id)
                }else{
                    existingItem.quantity--;
                    existingItem.totalPrice = existingItem.totalPrice - existingItem.price 
                }
            }
        }
    }
)


const reduxStore = configureStore({
    reducer: {
        myCart: myCartSlice.reducer, // calling from this name
        cartItems: cartItemSlice.reducer,
    }
})

export const myCartAction = myCartSlice.actions
export const cartItemsAction = cartItemSlice.actions

export default reduxStore



/*

const initialAuthstate = {isAuth :  false}

const authSlice = createSlice( {
    name: ' auth',
    initialState: initialAuthstate,
    reducers : {
        login(state){
            state.isAuth=true
        },
        logout(state){
            state.isAuth=false
        }
    }
} )
const counterReducer = (state = {counter : 0, showCounter: true}, action) => {
    if (action.type === "increment"){
        return {
            counter : state.counter +1,
            showCounter: state.showCounter
        }
    }

    if (action.type === "decrement"){
        return {
            counter : state.counter - action.amount,
            showCounter: state.showCounter
        }
    }

    if (action.type === "toggle"){
        return{
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state

}
*/