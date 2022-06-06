import {configureStore} from '@reduxjs/toolkit'
import { bookApis } from '../../services/post'
import { userSlice } from './productslice'
import cartReducer from './sliceF'

const store = configureStore({
    reducer:{
 [bookApis.reducerPath]: bookApis.reducer
       
    }
})

export default store