import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import alertContext from '../../context/alerts/alertContext';
import authContext from '../../context/auth/authContext';

const Signup = (props) => {
  const { alert, showAlert } = useContext(alertContext);
  const { message, isAuthenticated, handleUserRegistration } = useContext(authContext);

  // Handle user authentication, login or duplicated signup
  useEffect(() => {
    if (isAuthenticated) props.history.push('/projects');
    if (message) showAlert(message.msg, message.category);

  }, [message, isAuthenticated, props.history]);

  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });

  const { username, email, password, passwordConfirmation } = credentials;

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Form validation
    if ( 
             username.trim() === ""
          || email.trim() === "" 
          || password.trim() === ""
          || passwordConfirmation.trim() === ""
       ) {
        showAlert('All fields required', 'alerta-error');
        return;
       };

    // Check password
    if (password.length < 6) {
      showAlert('Password should have at least 6 characters', 'alerta-error');
      return;
    };

    // Check password confirmation
    if (password !== passwordConfirmation) {
      showAlert("Passwords don't match", "alerta-error");
      return;
    };

    // Pass to action
    const userData = {
      name: username,
      email: email,
      password: password
    };

    handleUserRegistration(userData);
  };

  return ( 
    <div className='form-usuario'>
      { alert ? ( <div className={`alerta ${alert.category}`}>{alert.message}</div> ) : null }
      <div className='contenedor-form sombra-dark'>
        <h1>Create new account</h1>
        <form
          onSubmit={handleSubmit}
        >
          <div className='campo-form'>
            <label htmlFor='username'>Username</label>
            <input 
              type='text'
              id='username'
              name='username'
              value={username}
              placeholder='Username'
              onChange={handleChange}
            />
          </div>
          <div className='campo-form'>
            <label htmlFor='email'>Email</label>
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
            <label htmlFor='passwordConfirmation'>Confirm Password</label>
            <input 
              type='password'
              id='passwordConfirmation'
              name='passwordConfirmation'
              value={passwordConfirmation}
              placeholder='******'
              onChange={handleChange}
            />
          </div>
          <div className='campo-form'>
            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Create account'
            />
          </div>
        </form>
        <Link to={'/'} className='enlace-cuenta'>Return to login</Link>
      </div>
    </div>
   );
};
 
export default Signup;