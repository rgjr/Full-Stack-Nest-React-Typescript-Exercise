/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { fetchInvoices, selectAllInvoices, selectInvoicesStatus } from '../features/invoice/invoiceSlice'
import { useAppSelector, useAppDispatch } from '../app/hooks'

// Define a function to fetch invoices from the API
// const retrieveInvoices = async () => {
//   const { data } = await axios.get('http://localhost:3000/invoices')
//   return data
// }

// Define a functional component to display invoices
const DisplayInvoices = () => {
  // const {
  //   data: invoices,
  //   error,
  //   isLoading,
  // } = useQuery('invoicesData', retrieveInvoices)

  // Use the useDispatch hook to dispatch actions
  // to the Redux store
  // and fetch invoices when the component mounts
  const dispatch = useAppDispatch();
  const invoicesData = useAppSelector(selectAllInvoices)
  const invoiceStatus = useAppSelector(selectInvoicesStatus)

  useEffect(() => {
    if (invoiceStatus === 'idle') {
      dispatch(fetchInvoices())
    }
  }, [dispatch, invoiceStatus])

  // if (isLoading) return <div>Fetching Invoices...</div>
  // if (error) return <div>An error occured: {`${error}`}</div>

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">ID</th>
            <th scope="col" className="px-6 py-3">Vendor Name</th>
            <th scope="col" className="px-6 py-3">Amount</th>
            <th scope="col" className="px-6 py-3">Due Date</th>
            <th scope="col" className="px-6 py-3">Paid</th>
            <th scope="col" className="px-6 py-3">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
          {invoicesData.map((invoice: any) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600" key={invoice.id}>
                <td className="px-6 py-4">{invoice.id}</td>
                <td className="px-6 py-4">{invoice.vendor_name}</td>
                <td className="px-6 py-4">{invoice.amount}</td>
                <td className="px-6 py-4">{invoice.due_date}</td>
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
      <div id="default-modal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <div class="p-4 md:p-5 space-y-4">
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
              </p>
            </div>
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
              <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}

// Export the component as default
export default DisplayInvoices