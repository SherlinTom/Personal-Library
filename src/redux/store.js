import {configureStore} from '@reduxjs/toolkit'
import bookReducer from './BookSlice'
import userReducer from './UserSlice'
const store = configureStore({
    reducer:{
        books: bookReducer,
        users: userReducer
    }
})
export default store