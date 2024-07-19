import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import localstorage from '../../Controllers/Localstorage';

const SignUp = () => {
  const signupRef = useRef(null);
  const onSignup =(e)=>{
    e.preventDefault()
    if(localstorage.createUser({
      email:signupRef.current.email.value,
      password:signupRef.current.password.value,
      name: signupRef.current.name.value
    })){
      window.location.href = '/'
    }
  }
  return ( <div style={{marginTop:'15%',display:'flex',alignItems:'center',flexDirection:'column'}}>
    <h1>SignUp</h1>
    <form ref={signupRef} className='input-size form' style={{display:'flex',flexDirection:'column'}} onSubmit={onSignup}>
      <input name='name' placeholder='Full Name' type='text' />
      <input name='email' placeholder='Email' type='text' />
      <input name='password' placeholder='Password' type='password' />
      <input placeholder='signup' type='submit' />
      <Link to={'/'}>
        Login
      </Link>
    </form>
  </div> );
}
 
export default SignUp;