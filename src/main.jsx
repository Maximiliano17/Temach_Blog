//Importes
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";
//Components
import App from './App.jsx'
import Guia from './views/GuiaView.jsx';
  
//Rutas

const router = createBrowserRouter([
  { 
    path: "/",
    element: <App/>, 
  }, 
  { 
    path: "/Guia",
    element: <Guia/>, 
  }, 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);