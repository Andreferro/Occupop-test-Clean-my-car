import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginScreen from '../views/login';
import ForgotPasswordScreen from '../views/forgotPassword';
import HomeScreen from '../views/home';
import { useAuth, useAuthDispatch } from '../context';
import HelpScreen from '../views/help';
import { useEffect, useState } from 'react';

const PrivateRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
]);

const PublicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordScreen />,
  },
  {
    path: "/help",
    element: <HelpScreen />,
  },
]);

function Root() {
  const user = useAuth();
  const dispatch = useAuthDispatch();

  const { email } = user || {};

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function() {
      const localUser = await localStorage.getItem('user');
      if (localUser) {
        if (dispatch) {
          dispatch({
            type: 'login',
            data: JSON.parse(localUser)
          });
        }
      }
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) return null;

  return (
    <RouterProvider router={email ? PrivateRoutes : PublicRoutes} />
  );
}

export default Root;
