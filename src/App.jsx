import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Contact from './Contact/Contact';


const routers = createBrowserRouter([
  {
    path:"/", element:<MainLayout/>, children:[
      {path:"", element:<Home/>},
      {path:"portfolio", element:<Portfolio/>},
      {path:"about", element:<About/>},
      {path:"contact", element:<Contact/>}



    ]
  }
])

function App() {
  return (
   <>
    <RouterProvider router={routers}></RouterProvider>
   </>
  );
}

export default App;
