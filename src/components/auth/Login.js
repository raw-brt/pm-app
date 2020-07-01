import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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

    // Pass to action
  };

  return ( 
    <div className='form-usuario'>
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