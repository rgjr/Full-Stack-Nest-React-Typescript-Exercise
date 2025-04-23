import React, { useState } from 'react';
import axios from 'axios'
import { useQuery } from 'react-query'
import { data } from 'react-router';

// fetch invoices from the API
const retrieveInvoice = async (id) => {
  console.log('Fetching invoice with ID:', id)
  const { data } = await axios.get(`http://localhost:3000/invoices/${id}`)
  return data
}

// functional component for the modal
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
          &#x2715; {/* Close button */}
        </button>
        {children}
      </div>
    </div>
  );
};

// functional component for the alert modal
const AlertModal = ({ isOpen, onClose, props }) => {
  console.log('data', props.data)

  const {
    data: invoice,
    error,
    isLoading,
  } = useQuery('invoicesData', () => retrieveInvoice(props.data))

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ul>
        <li>ID: {invoice?.id}</li>
        <li>{invoice?.vendor_name}</li>
        <li>Amount: {invoice?.amount}</li>
        <li>Due: {invoice?.due_date}</li>
        <li>Description: {invoice?.description}</li>
        <li>User ID: {invoice?.user_id}</li>
        <li>Paid: {invoice?.paid ? 'Paid' : 'Unpaid'}</li>
      </ul>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={onClose}
      >
        OK
      </button>
    </Modal>
  );
};

// functional component to display the modal
const ModalComponent = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setModalOpen(true)}
      >
        View
      </button>
      <AlertModal props={props} isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

// Export the ModalComponent as default
export default ModalComponent;
