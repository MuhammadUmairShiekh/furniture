import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CardStore";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});


// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, cartSlice);

// export const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store);
