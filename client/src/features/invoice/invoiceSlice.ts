import { createSlice } from '@reduxjs/toolkit';
import { Invoice } from '../../types/invoice';

// Define a type for the slice state
interface InvoiceState {
  invoice: Invoice | null;
  invoices: Invoice[];
}

// Define the initial state using that type
const initialState: InvoiceState = {
  invoice: null,
  invoices: []
};

// Create a slice of the store
const invoiceSlice = createSlice({
  name: 'invoice',
  initialState: initialState,
  reducers: {
    // Action to set the current invoice
    setInvoice: (state, action) => {
      state.invoice = action.payload;
    },
    // Action to set the list of invoices
    setInvoices: (state, action) => {
      state.invoices = action.payload;
    }
  }
});

// Export the actions generated from the slice
export const { reducer: invoiceReducer } = invoiceSlice;
