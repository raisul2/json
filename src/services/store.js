import {configureStore}  from '@reduxjs/toolkit'
import authSlice from './authSlice'
import { bookService } from './post'


const Store = configureStore({
    reducer:{
            [bookService.reducerPath]: bookService.reducer,
             authSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bookService.middleware)   
})

export default Store