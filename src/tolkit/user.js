 import {createSlice} from '@reduxjs/toolkit'
import { userSlice } from '../redux/store/productslice'
import { UserData} from './UserData'

 export const niceSlice = createSlice({
    
      name:"users",
      initialState: {
           value: UserData
      },

      reducers: {
               addUser: (state, aciton) =>{
                   /// write code for ading a user
                     state.value.push(aciton.payload)

                       
               },
               deletUser : (state, action) => {
                   state.value = state.value.filter((user)=> user.id !== action.payload)
               },

      },


 })

 export const {addUser , deletUser} = userSlice.actions 

 export default niceSlice.reducer