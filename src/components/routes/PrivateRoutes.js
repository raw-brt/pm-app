import React, { useContext, useEffect } from 'react';
import authContext from '../../context/auth/authContext';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({ component: Component, ...props }) => {
  const { isAuthenticated, loading, handleAuthenticateUser } = useContext(authContext);

  useEffect(() => {
    handleAuthenticateUser();
  }, []);

  return ( 
    <Route
     { ...props } render={ props => !isAuthenticated && !loading ? <Redirect to ='/' /> : <Component {...props} /> }>
    </Route>
   );
}
 
export default PrivateRoutes;