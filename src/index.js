import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home/Index';
import "./styles.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Test from './pages/test/index';

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/test", element: <Test />},

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

