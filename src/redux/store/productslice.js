// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
// import axios from 'axios'
// export const STATUS = Object.freeze({
//     IDLE: 'idle',
//     ERROR:'error',
//     LOADING:'loading'
// })
 
// const productSlice =createSlice({

//     name:'product',
//     initialState:{
//          data:[],
//          status:STATUS.IDLE      
//     },

//     reducers:{
//              setProduct(state, action) {
//                  state.data = action.payload
//              },
//              setStatus(state, action) {
//                  state.status = action.payload
//              }
//     },


//     // extraReducers: (bullder) =>{
            
//     //      bullder

//     //      .addCase(featchProducts.pending, (state, action)=>{

//     //         state.status = STATUS.LOADING

//     //      })

//     //      .addCase(featchProducts.fulfilled, (state, action) =>{
//     //        state.data = action.payload
//     //        state.status = STATUS.IDLE
//     //      })
//     //      .addCase(featchProducts.rejected , (state, action)=>{
//     //          state.status = STATUS.ERROR
//     //      })
//     // }

    

// })

// export const {setProduct, setStatus} = productSlice.actions
// export default productSlice.reducer
// /// thunks  

// export function featchProducts() {
//              return async function featchPThunk(dispatch, getState) {

//                 dispatch(setStatus(STATUS.LOADING))
  
                 
//                  try {
//                     const {data} = await  axios.get(`http://localhost:4000/students`)

                       
//                      dispatch(setProduct(data))
//                      dispatch(setStatus(STATUS.IDLE))
//                  } catch (error) {
//                      console.log(error)
//                     dispatch(setStatus(STATUS.ERROR))
//                  }
//              }
// }


// // export const  featchProducts = createAsyncThunk('products/fetch', async () =>{
    
// //     const {data} = await axios.get('http://localhost:4000/students')
   

// //     return data
  
     

// // })



import {createSlice} from '@reduxjs/toolkit'
import { UserData } from '../../Userdata'


export const userSlice = createSlice({
    name:"users",
    initialState: {value: UserData},
    reducers: {
        addUser: (state, action) =>{
               
        }
    }
})

