import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18
import './index.css'; // Importing global CSS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout'; // Layout component
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import User from './components/User/User';
import Github from './components/Github/Github';
import Explore from './components/Explore/Explore';

// Create the router with unique paths for each component
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'user/:userid', element: <User /> },
      { path: 'github', element: <Github /> },
      { path: 'explore', element: <Explore /> },
    ],
  },
]);

// Mount the React application to the root element
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
