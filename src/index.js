import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './main.css';
import App from './App';
import About from './Pages/About';

const router = createBrowserRouter ([
  {
  path: '/',
  element: <App />,
  },
  {
  path: '/about',
  element: <About />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
