import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import alertContext from '../../context/alerts/alertContext';
import authContext from '../../context/auth/authContext';

const Login = (props) => {
  const { alert, showAlert } = useContext(alertContext);
  const { message, isAuthenticated, handleLogin } = useContext(authContext);

  useEffect(() => {
    if (isAuthenticated) props.history.push('/projects');
    if (message) showAlert(message.msg, message.category);
    // eslint-disable-next-line
  }, [message, isAuthenticated, props.history]);

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = credentials;

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Form validation
    if (email.trim() === "" || password.trim() === "") {
      showAlert('All fields required', 'alerta-error');
    };

    // Pass to action
    handleLogin({ email, password });
  };

  return ( 
    <div className='form-usuario'>
      { alert ? ( <div className={`alerta ${alert.category}`}>{alert.message}</div> ) : null }  
      <div className='contenedor-form sombra-dark'>
        <h1>Sign in</h1>
        <form
          onSubmit={handleSubmit}
        >
          <div className='campo-form'>
            <label htmlFor='password'>Email</label>
            <input 
              type='email'
              id='email'
              name='email'
              value={email}
              placeholder='Email'
              onChange={handleChange}
            />
          </div>
          <div className='campo-form'>
            <label htmlFor='password'>Password</label>
            <input 
              type='password'
              id='password'
              name='password'
              value={password}
              placeholder='******'
              onChange={handleChange}
            />
          </div>
          <div className='campo-form'>
            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Signin'
            />
          </div>
        </form>
        <Link to={'/signup'} className='enlace-cuenta'>Create new account</Link>
      </div>
    </div>
   );
}
 
export default Login;