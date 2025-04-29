import { configureStore } from '@reduxjs/toolkit';
import { invoiceReducer } from '../features/invoice/invoiceSlice';
import { authReducer } from '../features/auth/authSlice';

// Create a Redux store with the invoice reducer
export const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
    auth: authReducer
  }
});

// Infer the `AppDispatch` type from the store itself
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: { invoice: InvoiceState }
export type AppDispatch = typeof store.dispatch;
