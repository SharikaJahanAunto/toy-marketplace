import { createBrowserRouter } from 'react-router-dom'
import Home from '../Home/Home';
import Main from '../Layout/Main'
import Blog from '../Pages/Blogs/Blog';
import Error from '../Pages/Error/Error';
import Login from '../Pages/Login/Login';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>, 
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
          path: '/error',
          element: <Error></Error>
        }
      ]
    },
  ]);

  export default router