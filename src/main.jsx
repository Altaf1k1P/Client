import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter,
  RouterProvider} from 'react-router-dom'
  import Home from './pages/Home.jsx'
  import Contact from './pages/contact.jsx'
  import Shop from './pages/Shop.jsx'
  import SingleProduct from './pages/SingleProduct.jsx'

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        // Add your routes here
        // {element: <YourComponent />}
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/contact-us',
          element: <Contact/>
        },
        {
          path: '/shop',
          element: <Shop/>
        },
        {
          path: '/product/:productId',
          element: <SingleProduct />
        }
      ],
    }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
