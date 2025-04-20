/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

// Define a function to fetch invoices from the API
const retrieveInvoices = async () => {
  const { data } = await axios.get('http://localhost:3000/invoices')
  return data
}

// Define a functional component to display invoices
const DisplayInvoices = () => {
  const {
    data: invoices,
    error,
    isLoading,
  } = useQuery('invoicesData', retrieveInvoices)

  if (isLoading) return <div>Fetching Invoices...</div>
  if (error) return <div>An error occured: {`${error}`}</div>

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">ID</th>
            <th scope="col" className="px-6 py-3">Vendor Name</th>
            <th scope="col" className="px-6 py-3">Amount</th>
            <th scope="col" className="px-6 py-3">Due Date</th>
            <th scope="col" className="px-6 py-3">Description</th>
            <th scope="col" className="px-6 py-3">User ID</th>
            <th scope="col" className="px-6 py-3">Paid</th>
            <th scope="col" className="px-6 py-3">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
          {invoices.map((invoice: any) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600" key={invoice.id}>
                <td className="px-6 py-4">{invoice.id}</td>
                <td className="px-6 py-4">{invoice.vendor_name}</td>
                <td className="px-6 py-4">{invoice.amount}</td>
                <td className="px-6 py-4">{invoice.due_date}</td>
                <td className="px-6 py-4">{invoice.description}</td>
                <td className="px-6 py-4">{invoice.user_id}</td>
                <td className="px-6 py-4">{invoice.paid ? 'Paid' : 'Unpaid'}</td>
                <td className="px-6 py-4">
                  <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    View
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div >
  )
}

// Export the component as default
export default DisplayInvoices