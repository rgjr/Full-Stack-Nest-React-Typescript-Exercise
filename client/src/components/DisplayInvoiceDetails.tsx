import axios from 'axios'
import { useQuery } from 'react-query'

// Define a function to fetch invoices from the API
const retrieveSingleInvoice = async (id: string) => {
  const { data } = await axios.get(`http://localhost:3000/invoices/${id}`)
  return data
}

export default retrieveSingleInvoice