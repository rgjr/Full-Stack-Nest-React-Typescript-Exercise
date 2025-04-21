export interface Invoice {
  id: string;
  vendor_name: string;
  amount: number;
  due_date: Date;
  description: string;
  user_id: number;
  paid: boolean;
}

export interface InvoiceState {
  invoice: Invoice | null;
  invoices: Invoice[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}
