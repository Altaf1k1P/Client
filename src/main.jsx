import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter,
  RouterProvider} from 'react-router-dom'
  import Home from './pages/Home.jsx'
  import contact from './pages/contact.jsx'

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        // Add your routes here
        // {element: <YourComponent />}
        {
          path: '/home',
          element: <Home/>
        },
        {
          path: '/contact',
          element: <contact/>
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
