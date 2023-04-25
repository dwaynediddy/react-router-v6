import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter ,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css';
import App from './App';
import Root from './routes/Root'
import ErrorPage from "./ErrorPage";
import Contact from "./routes/contact"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);