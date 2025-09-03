import './App.css'
import Layout from './components/Layout/Layout';
import About from './pages/About'
import Home from './pages/Home'
import Shop from './pages/Shop'
import AllProducts from './components/shop/AllProducts';
import Mens from './components/shop/Mens';
import Womens from './components/shop/Womens';
import Notfound from './components/Notfound';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
let router  = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "shop",
        element: <Shop />,
        children: [
          { index: true, element: <AllProducts /> }, 
          { path: "mens", element: <Mens /> },
          { path: "womens", element: <Womens /> },
        ],
      },
      {path:"*",element:<Notfound />}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
