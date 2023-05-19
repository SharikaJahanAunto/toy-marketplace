import { createBrowserRouter } from 'react-router-dom'
import Home from '../Home/Home/Home';
import Main from '../Layout/Main'
import Blog from '../Pages/Blogs/Blog';
import Error from '../Pages/Error/Error';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';

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
        }
      ]
    },
  ]);

  export default router