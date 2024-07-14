import {configureStore} from "@reduxjs/toolkit"
import authSlice from './slice/appSlice'

export const store = configureStore({
    reducer:{
        authSlice
    },
    devTools:true,
    
})
