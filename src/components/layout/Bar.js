import React, { useContext, useEffect } from 'react';
import authContext from '../../context/auth/authContext';

const Bar = () => {
  const { user, handleAuthenticateUser, handleLogout } = useContext(authContext);

  useEffect(() => {
    handleAuthenticateUser();
  }, []);

  return ( 
    <header className='app-header'>
      { user ? <p className='nombre-usuario'>Welcome, <span>{user.name}</span></p> : null }
      <nav className='nav-principal'>
        <button
          className='btn btn-blank cerrar-sesion'
          onClick={() => handleLogout}
        >Logout</button>
      </nav>
    </header>
   );
};
 
export default Bar;