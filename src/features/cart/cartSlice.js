import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
// import cartItems from "../../cartItems";
const initialState ={
    cartItems :[],
    amount:1,
    total : 0,
    isLoading:true,
}

const url = "https://course-api.com/react-useReducer-cart-project"


export const getCartItems = createAsyncThunk( 
    "cart/getCartItems", async ()=>{
        return fetch (url)
        .then((resp)=>resp.json())
        .catch((err)=> console.log(err))
    }
 )

const cartSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        clearCart : (state)=>{
            state.cartItems =[]
        },
    removeCart : (state,action)=>{
        state.cartItems = state.cartItems.filter((item)=>item.id !== action.payload)
        console.log(action)
    },
    increment : (state,action)=>{
       const cartItem = state.cartItems.find((item)=> item.id === action.payload)
       cartItem.amount = cartItem.amount += 1
    },
    dicrement : (state,{payload})=>{
        const cartItem = state.cartItems.find((item)=> item.id === payload)
        if(cartItem.amount > 0){
            cartItem.amount -=1
        }
    },
    calculateTotals : (state)=>{
        let amount = 0
        let total =0
        state.cartItems.forEach((item)=>{
            amount += item.amount
            total += item.amount * item.price
        })
        state.amount = amount
        state.total = total 
    }
    
    },
    extraReducers:{
        [getCartItems.pending]:(state)=>{
            state.isLoading = true   
        },
        [getCartItems.fulfilled]:(state,action)=>{
            state.isLoading = false
            console.table(action.payload)
            state.cartItems = action.payload
        },
        [getCartItems.rejected]:(state)=>{
            state.isLoading = false
        }
    }
})


export const {removeCart ,increment,dicrement,calculateTotals, clearCart} = cartSlice.actions

// console.log(cartSlice)
export default cartSlice.reducer