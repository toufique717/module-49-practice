import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componant/Home/Home.jsx';
import Root from './componant/Root/Root.jsx';
import Contacts from './componant/Contacts/Contacts.jsx';
import Login from './componant/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/contacts",
        element:<Contacts></Contacts>,
      },

      {
        path: "/login",
        element:<Login></Login>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
