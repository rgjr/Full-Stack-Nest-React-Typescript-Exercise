import DisplayInvoices from './components/DisplayInvoices'
import Sidebar from './components/Sidebar'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: '/login',
    element: <div>Login</div>,
  },
  {
    path: '/invoices',
    element: <DisplayInvoices />,
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Sidebar />
    </div>
  )
}

export default App
