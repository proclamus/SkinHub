import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About/About";
import  Weapons  from "../pages/Weapons/Wepons";
import Contact from "../pages/Contact/Contact";
import Skins from "../pages/Skins/Skins";
import Pages from "../pages";
import Home from "../pages/Home/Home";

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Pages />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path:'/weapons',
        element: <Weapons />
      },
      {
        path: '/skin',
        element: <Skins />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])