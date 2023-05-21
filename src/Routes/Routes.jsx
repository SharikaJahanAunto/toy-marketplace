import { createBrowserRouter } from 'react-router-dom'
import Home from '../Home/Home/Home';
import Main from '../Layout/Main'
import AddAToy from '../Pages/AddAToy/AddAToy';
import AllToys from '../Pages/AllToys/AllToys';
import Blog from '../Pages/Blogs/Blog';
import Error from '../Pages/Error/Error';
import Login from '../Pages/Login/Login';
import MyToys from '../Pages/MyToys/MyToys';
import Registration from '../Pages/Registration/Registration';
import ToyDetails from '../Pages/ToyDetails/ToyDetails';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>, 
      errorElement: <Error></Error>,
      children: [
        {
            path: '/', 
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }, 
        {
          path: '/register',
          element: <Registration></Registration>
        },
        {
          path: '/allToys',
          element: <AllToys></AllToys>
        },
        {
          path:'/toyDetails/:id',
          element: <ToyDetails></ToyDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
         },
         {
          path: '/add-toy',
          element:<AddAToy></AddAToy>
         },
         {
          path:'/my-toys',
          element: <MyToys></MyToys>
         }
      ]
    },
  ]);

  export default router