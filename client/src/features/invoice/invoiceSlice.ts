import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Invoice, InvoiceState } from '../../types/invoice';

// Define the initial state using the InvoiceState type
const initialState: InvoiceState = {
  invoice: null,
  invoices: [],
  status: 'idle',
  error: null
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched invoices to the array
        state.invoices.push(...action.payload);
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      });
  }
});

// Create a thunk to fetch invoices from the API
export const fetchInvoices = createAsyncThunk(
  'invoices/fetchInvoices',
  async () => {
    const { data } = await axios.get<Invoice[]>(
      'http://localhost:3000/invoices'
    );
    return data;
  },
  {
    condition: (arg, { getState }) => {
      const { invoice } = getState() as InvoiceState;
      if (invoice?.status === 'pending') {
        return false; // Prevent duplicate requests
      }
    }
  }
);

// Export the actions generated from the slice
export const { reducer: invoiceReducer } = invoiceSlice;

export const selectAllInvoices = (state: { invoice: InvoiceState }) =>
  state.invoice.invoices;
export const selectInvoicesStatus = (state: { invoice: InvoiceState }) =>
  state.invoice.status;
export const selectInvoicesError = (state: InvoiceState) => state.error;
