import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './features/Users/auth';
import UtilReducer from './features/Utils/utils';
// import AccountReducer from "./features/Users/accounts"

export const store = configureStore({
  reducer: {
    utils : UtilReducer,
  },
})


export const dispatch = store.dispatch;