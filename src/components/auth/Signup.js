import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
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

    // Check password

    // Pass to action
  };

  return ( 
    <div className='form-usuario'>
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
}
 
export default Signup;