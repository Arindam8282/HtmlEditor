import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import localstorage from '../../Controllers/Localstorage';

const Login = () => {
  const loginRef = useRef(null);
  const onLogin =(e)=>{
    e.preventDefault()
    if(localstorage.loginUser({
      email:loginRef.current.email.value,
      password:loginRef.current.password.value
    })){
      window.location.reload()
    }
  }
  return ( <div style={{marginTop:'15%',display:'flex',alignItems:'center',flexDirection:'column'}}><h1>Login</h1>
    <form ref={loginRef} className='input-size form' style={{display:'flex',flexDirection:'column'}} onSubmit={onLogin}>
      <input name='email' placeholder='Email' type='text' />
      <input name='password' placeholder='Password' type='password' />
      <input title='Login' type='submit' />
      <Link to={'/signup'}>
        SignUp
      </Link>
    </form>
  </div> );
}
 
export default Login;