import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducer from './features/searchSlice';
import collectionReducer from './features/collectionSlice';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  search: searchReducer,
  collection: collectionReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["collection"], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);